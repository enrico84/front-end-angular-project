import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './model/user';
import {delay} from 'rxjs/operators';
import { MatButton } from '@angular/material/button';

const URL = 'https://jsonplaceholder.typicode.com/users';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [`
    .example-action-buttons {
      padding-bottom: 20px;
    }
    
    .example-headers-align .mat-expansion-panel-header-title,
    .example-headers-align .mat-expansion-panel-header-description {
      flex-basis: 0;
    }
    
    .example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }
    
    .example-headers-align .mat-form-field + .mat-form-field {
      margin-left: 8px;
    }
`]
})
export class AppComponent {

  users: User[] | null = null;  // ANGULAR-12 - *STRICT-MODE => SPECIFICO CHE L'ARRAY PUO' ESSERE VUOTO O NULL 

  // CARICO GLI UTENTI CON 2 SECONDI DI RITARDO
  constructor(private http: HttpClient) {
    http.get<User[]>(URL)
    .pipe(delay(2000))
    .subscribe(
      result => {
        this.users = result;
        console.log(this.users);
      });
  }

  //DELETE CON 1 SECONDO DI RITARDO
  deletehandler(id: number, btnRef: MatButton) {
    btnRef.disabled = true;
    this.http.delete(`${URL}/${id}`)
    .pipe(delay(1000))
    .subscribe(
      () => {
        if(this.users) {
          this.users = this.users.filter(user => user.id !== id);
        }
      },
      () => (btnRef.disabled = false)
      );
  }


}
