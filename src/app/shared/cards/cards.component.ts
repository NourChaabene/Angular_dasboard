import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from '@angular/router';
import {DepartementService} from '../../departement/departement.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private departService: DepartementService,
  ) {
  }

  @Input('student') studentCounts = 0;
  @Input('professor') professorCounts = 0;
  @Input('staff') staffCount = 0;
  @Input('budget') budget = 0;
  @Output('switch') clickedItem = new EventEmitter<string>();

  ngOnInit(): void {
  }

  getRessource() {
    return this.router.url.split('/')[2];
  }

  getAllEtudiant() {
    const str = JSON.stringify(this.departService.getEtudiant(this.getRessource()))
    this.clickedItem.emit('etudiant;' + str);
  }

  getAllProfessors() {
    const str = JSON.stringify(this.departService.getProfessor(this.getRessource()))
    this.clickedItem.emit('professor;' + str );
  }

  getAllStaff() {
    const str = JSON.stringify(this.departService.getStuff(this.getRessource()))
    this.clickedItem.emit('staff;' + str );
  }

  getAllBudget() {
    const str = JSON.stringify(this.departService.getBudget(this.getRessource()))
    this.clickedItem.emit('budget;' + str );
  }

}
