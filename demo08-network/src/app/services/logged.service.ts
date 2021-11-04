import { Injectable } from '@angular/core';
import { Utente } from '../entity/Utente';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  public utenti: Array<Utente> = [];

  constructor() { }

  setData(logged: boolean, id: number): void {
    console.log("LoggedService - method setData:: logged " +logged+ ", id " + id);
  }
}
