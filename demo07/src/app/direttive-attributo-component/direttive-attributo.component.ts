import { Component } from '@angular/core';

@Component({
  selector: 'direttive-attributo',
  templateUrl: './direttive-attributo.html',
  styles: [`
    .male { background-color: blue; color: white; width: 20% }
    .female { background-color: pink; width: 20%  }
    .fontCursive { font-family: cursive }
    .fontFantasy {font-family: fantasy}
    .mySimpleHR { width: 50%; margin-left: 0px; border-width: 5px }
    .myBtn { margin: 3px }
    `]
})
export class DirettiveAttributoComponent {
  title = "Direttive Attributo + Bootstrap";
  paragr_bootstrap = "Uso di bootstrap";

  users = [
    {id: 1, name: "Maurizio", gender: "M", age: 20},
    {id: 2, name: "Agata", gender: "F", age: 25},
    {id: 3, name: "Lino", gender: "M", age: 30},
    {id: 4, name: "Nunzia", gender: "F", age: 35}
  ]

  // Funzione associata alla proprietà [ngClass]
  getCls(user) {
    return {
      'male': user.gender === 'M',
      'fontFantasy': user.gender === 'M',
      'female': user.gender === 'F',
      'fontCursive': user.gender === 'F'
    };
  }

  // Funzione associata alla proprietà [ngStyle]
  getStyle(user) {
    return {
      width: '20%',
      backgroundColor: user.gender === 'M' ? 'black' : 'grey',
      color: user.gender === 'M' ? 'white' : null,
      fontSize: user.age + 'px'
    };
  }

}
