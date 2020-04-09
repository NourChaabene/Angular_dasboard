// @ts-ignore
import * as data from '../../assets/data.json';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
  }
)
export class DepartementService {
getEtudiant(ressource) {
  // @ts-ignore
  return data.default[ressource].etudiant;
}
getProfessor(ressource) {
  // @ts-ignore
  return data.default[ressource].professeur;
}
getStuff(ressource) {
  // @ts-ignore
  return data.default[ressource].staff;

}
getBudget(ressource) {
  // @ts-ignore
  return data.default[ressource].budget;

}



}
