import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { InformatiqueComponent } from './departement/informatique/informatique.component';
import { CivilComponent } from './departement/civil/civil.component';
import { ElectromecaniqueComponent } from './departement/electromecanique/electromecanique.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ElectriqueComponent } from './departement/electrique/electrique.component';
import { MateriauxComponent } from './departement/materiaux/materiaux.component';
import { BiologieComponent } from './departement/biologie/biologie.component';
import { GeologieComponent } from './departement/geologie/geologie.component';
import { CardsComponent } from './shared/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    InformatiqueComponent,
    CivilComponent,
    ElectromecaniqueComponent,
    LoginComponent,
    ElectriqueComponent,
    MateriauxComponent,
    BiologieComponent,
    GeologieComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
