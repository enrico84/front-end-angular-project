import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './model/user';
import { delay, filter, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './components/dialog-delete.component';
import { DialogUserFormComponent } from './components/dialog-user-form.component';

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
  constructor(
              private http: HttpClient,
              public dialog: MatDialog
              ) {
    http.get<User[]>(URL)
    .pipe(delay(2000))
    .subscribe(
      result => {
        this.users = result;
      });
  }

  //DELETE CON 1 SECONDO DI RITARDO
  deletehandler(user: User) {
    this.openDialog(user);
  }

  openDialog(user: User): void {  // ISTANZIO LA FINESTRA DI DIALOG
    const dialogRef = this.dialog.open<DialogDeleteComponent, User>(DialogDeleteComponent, {
      width: '300px',
      data: user
    });
    /*
    dialogRef.afterClosed().subscribe((id: number) => {   // ALLA CHIUSURA DELLA DIALOG-DELETE -- SOLUZIONE CLASSICA
      if(id) {
        this.http
        .delete(`${URL}/${id}`)
        .pipe(delay(1000))
        .subscribe(
          () => {
            if(this.users) {
              this.users = this.users.filter(u => u.id !== user.id);
            }
          });
        };
      })
    */
    dialogRef.afterClosed()  // ALLA CHIUSURA DELLA DIALOG-DELETE -- SOLUZIONE RXJS
    .pipe(
      filter(id => !!id), // CONTROLLO SE L'ID ESISTE
      delay(1000),
      switchMap(id =>  this.http.delete(`${URL}/${id}`)) // L'ID CHE PRENDO LO USO NELLA DELETE
    )
    .subscribe(() => {
      if(this.users) {
        this.users = this.users.filter(u => u.id !== user.id);  // FILTRO LA LISTA FINALE
      }
    });
  }

  upsertHandler(user?: User ): void {
    const dialogRef = this.dialog.open<DialogUserFormComponent, User>(DialogUserFormComponent, {
      width: '300px',
      data: user
    });
    dialogRef.afterClosed().subscribe((formData: User) => { // ALLA CHIUSURA DELLA DIALOG PASSO CIO' CHE INVIO DAL FORM
      console.log('qui formData!', formData);
      if(formData) {
        if(user?.id) {
          this.editHandler({...user, ...formData}); // ... MERGE DEI DATI TRA TUTTO USER + I DATI DEL FORM
        } else {
          this.addHandler({...user, ...formData});
        }
      }
    });
  }

  // EDIT DI UN USER
  editHandler(user: User): void { // ISTANZIO LA FINESTRA DI DIALOG
    this.http.patch<User>(`${URL}/${user.id}`, user)
    .subscribe((response) => {
      if(this.users) {
        this.users = this.users.map(u => (u.id === user.id ? response : u));
      }
    });
  }
    
  // ADD DI UN USER
  addHandler(user: User): void {
    this.http.post<User>(`${URL}`, user)
    .subscribe((response) => {
      if(this.users) {
        this.users = [...this.users, response];  // APPEND DELLA RESPONSE DELLA POST(IL NUOVO USER) ALL'ARRAY CON ...
      }
    });
  }
   



}
