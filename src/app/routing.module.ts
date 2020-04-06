import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {InformatiqueComponent} from './departement/informatique/informatique.component';
import {ElectromecaniqueComponent} from './departement/electromecanique/electromecanique.component';
import {CivilComponent} from './departement/civil/civil.component';
import {ElectriqueComponent} from './departement/electrique/electrique.component';
import {MateriauxComponent} from './departement/materiaux/materiaux.component';
import {BiologieComponent} from './departement/biologie/biologie.component';
import {GeologieComponent} from './departement/geologie/geologie.component';

const appRouting: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
      {path: 'informatique', component: InformatiqueComponent},
      {path: 'electromecanique', component: ElectromecaniqueComponent},
      {path: 'electrique', component: ElectriqueComponent},
      {path: 'civil', component: CivilComponent},
      {path: 'materiaux', component: MateriauxComponent},
      {path: 'biologie', component: BiologieComponent},
      {path: 'geologie', component: GeologieComponent},
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
