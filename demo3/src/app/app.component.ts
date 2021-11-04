import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User} from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .user {
      border: 1px dashed gainsboro;
      border-radius: 4px;
      padding: 10px;
      margin-top: 5px;
      position: relative;
    }
    .id {
      background-color: gainsboro;
      border-radius: 50%;
      position: absolute;
      right: 10px;
      top: 10px;
      height: 20px;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      z-index: 1;
    }
    .name {
      display: block;
      margin-bottom: 10px;
      border-bottom: 1px solid whitesmoke;
      width: 100%;
      font-size: 20px;
    }
    .birthday {
      border: 1px dashed gainsboro;
      border-radius: 4px;
      padding: 10px;
    }
    .male {
      color: aqua;

    }
    .female {
      color: pink; 
    }
    .invalid {
      color: red;
    }
    .valid {
      color: green;
    }
  `]
  // styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demo3';
  public users: User[]; //tipizzo users al tipo User

  constructor() {

    this.users = [ 
    {
      id: 1,
      name: 'Enrico',
      age: 37,
      gender: 'M',
      city: 'Battipaglia',
      birthday: 443358780000,
      bitcoins: 3.3457832
    },
    {
      id: 2,
      name: 'Amelia',
      age: 42,
      gender: 'F',
      city: 'Pontecagnano',
      birthday: 443358780000,
      bitcoins: 3.3454832
    },
    {
      id: 3,
      name: 'Gino',
      age: 55,
      gender: 'M',
      city: 'Pontecagnano',
      birthday: 443358780000,
      bitcoins: 3.3457832
    },
    {
      id: 4,
      name: 'Maria',
      age: 25,
      gender: 'F',
      city: 'Salerno',
      birthday: 443358780000,
      bitcoins: 3.3457832
    }
    ]
  }

  // #name e #age del template html sono come 'getElementById'
  // collegati a name e age passati al metodo
  keydownHandler(name: HTMLInputElement, age: HTMLInputElement): void {
     // Aggiungo un utente nell'array users 
     this.users.unshift( 
       {
        id: Date.now(),
        name: name.value,
        age: +age.value, // parseInt(age.value)
        gender: 'M',
        city: 'Milano',
        birthday: 443358780000,
        bitcoins: 3.3457832
      }
     )
   }

   // Aggiungo valori all'array users
   // in base a ciò che inserisco nel form
   formSubmit(f: NgForm): void {
    console.log('formSubmit trigger: ', f);
    console.log('Values: ', f.value);
    const user = {
        ...f.value,     // ... => uso dello 'spread-operator'
        id: Date.now()
      };

    this.users.unshift(user);
   }

   // Eliminazione di una elemento dall'array users:
   // "filter" esegue un filtro sull'array users
   // tornando un nuovo array users eccetto con
   // l'user con id = userId
  delete(userId: number) : void {
    this.users = this.users.filter(user => user.id !== userId)
  }
}

