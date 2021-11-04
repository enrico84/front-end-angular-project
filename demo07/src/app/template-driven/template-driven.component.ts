// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { NgForm }   from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
  .mySimpleHR { width: 50%; margin-left: 0px; border-width: 5px }
  .error {background-color: red; width: 20%; margin-left: 1em;}
  `]
})
export class TemplateDrivenComponent implements OnInit {
  title = "Template reference variable # per referenziare valori nei tag HTML";
  title2Way = "Two way data binding con [(ngModel)] - digita un nome nella casella";
  title_form = "ngForm, [ngModule] e uso di Form"

  /*
    "Template Reference variable #
  */
  users = ["Enrico", "Fabio"];
  addUser(input: HTMLInputElement): void {
    this.users.push(input.value);
    input.value = "";
    input.focus();
  }

  /*
    Funzione chiamata con [(ngModel)] per un "Data Binding Two Way"
  */
  label:string = "Giuseppe";
  updateLabel(): void {
    console.log(this.label);
    this.label = "Mario";
  }


  /*
    Uso di ngForm e #f
  */
  utente: Utente;
  utenti = [
    {name: "Mario", age: 21}
  ];

  addFormUser(form: NgForm): void {
    console.log(form);
    this.utenti.push(form.value);
    form.reset(); // La funzione reset() ripulisce tutte le proprietà del form
  }

  // Cliccando su un nome di un utente nella lista, verrà settato l'utente attivo
  // e il Form verrà popolato
  setActive(utente: Utente) {
    this.utente = utente;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

interface Utente {
  name: string;
  age: number;
  city: string;
  color: string;
}
