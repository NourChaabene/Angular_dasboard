import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
// tslint:disable-next-line:max-line-length
  departement: string [] = ['Informatique', 'Electromecanique',
    'Electrique', 'Materiaux',
    'Civil', 'Biologie', 'Geologie'];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(item) {
    switch (item) {
      case 'Informatique' :
        this.router.navigate(['home/informatique']);
        break;
      case 'Electromecanique' :
        this.router.navigate(['home/electromecanique']);
        break;
      case 'Electrique' :
        this.router.navigate(['home/electrique']);
        break;
      case 'Materiaux' :
        this.router.navigate(['home/materiaux']);
        break;
      case 'Civil' :
        this.router.navigate(['home/civil']);
        break;
      case 'Biologie' :
        this.router.navigate(['home/biologie']);
        break;
      case 'Geologie' :
        this.router.navigate(['home/geologie']);
        break;
    }
  }

  isActive(item) {
    return this.router.url.includes(item.toLowerCase());
  }

}
