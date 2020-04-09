import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geologie',
  templateUrl: './geologie.component.html',
  styleUrls: ['./geologie.component.css']
})
export class GeologieComponent implements OnInit {
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
