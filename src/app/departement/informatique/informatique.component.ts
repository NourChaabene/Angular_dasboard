import {Component, OnInit, Output} from '@angular/core';
import {DepartementService} from '../departement.service';

@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.css'],
})
export class InformatiqueComponent implements OnInit {
  rows = [];
  cols = [];
  visible = false;
  constructor() { }

  ngOnInit(): void {
  }
  getSelectedItem(event) {
    this.visible = true;
    this.rows = JSON.parse(event.split(';')[1]);
    console.log(this.rows)
    this.cols = Object.keys(this.rows[0]);
  }

}
