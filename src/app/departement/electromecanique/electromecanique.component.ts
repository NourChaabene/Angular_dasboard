import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electromecanique',
  templateUrl: './electromecanique.component.html',
  styleUrls: ['./electromecanique.component.css']
})
export class ElectromecaniqueComponent implements OnInit {
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
