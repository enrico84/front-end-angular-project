import { Component } from '@angular/core';
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
  `]
  // styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Angular demo2';
  zoom: number = 10;
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
}