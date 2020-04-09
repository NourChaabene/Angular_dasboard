import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biologie',
  templateUrl: './biologie.component.html',
  styleUrls: ['./biologie.component.css']
})
export class BiologieComponent implements OnInit {
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
