import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input('student') studentCounts = 0;
  @Input('professor') professorCounts = 0;
  @Input('staff') staffCount = 0;
  @Input('budget') budget = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
