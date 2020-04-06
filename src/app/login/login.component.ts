import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if ( this.email === 'nour@gmail.com' && this.password === '123456') {
      //alert('success');
      this.router.navigate(['home']);
    } else {
      alert('Not allowd to pass');

    }
  }

}
