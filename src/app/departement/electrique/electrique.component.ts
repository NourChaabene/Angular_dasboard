import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrique',
  templateUrl: './electrique.component.html',
  styleUrls: ['./electrique.component.css']
})
export class ElectriqueComponent implements OnInit {
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
