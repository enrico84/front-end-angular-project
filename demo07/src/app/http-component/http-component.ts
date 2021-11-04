import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/User";

@Component({
  selector: 'http-component',
  template: `
    <h2>{{title}}</h2>
    <h3 *ngIf="!users; else success">...Loading</h3>
    <ng-template #success>
      <div *ngFor="let u of users; let i=index; let dispari=odd; let fine=last">
        {{i+1}}. {{u.name}} {{u.surname}} - {{u.email}} - Phone: {{u.phone}} - Sito web: {{u.website}} -
        Città: {{u.address.city}}
        <button (click)="immutableDeleteUser(u)">Delete</button>
        <hr *ngIf="dispari">
        <div *ngIf="fine">END OF LIST</div>
      </div>
    </ng-template>
  `,
  styles: []
})
export class HttpComponent implements OnInit {
  title = "Chiamata Http GET";
  url = "https://jsonplaceholder.typicode.com/users";
  users: User[];

  /*
    HttpClient viene fornito dal modulo HttoClientModule.
    Ricevimento di una chiamata HTTP GET e tipizzazione di questa a un Oggetto di tipo User[]
  */
   constructor(private http: HttpClient) {}

  ngOnInit() {
    // Con la funzione setTimeout simulo un rallentamento di 2 secondi per caricare i dati
   setTimeout( () => {
     this.http.get<User[]>(this.url)
       .subscribe((result: User[]) => {
         console.log(result);
         this.users = result;
       })
   }, 2000);
  }

  immutableDeleteUser(user: User) {
    // APPROCCIO IMMUTABILE
    this.users = this.users.filter(item => item.id !== user.id);
  }

  mutableDeleteUser(user: User): void {
    // APPROCCIO MUTEVOLE
    const id = this.users.findIndex(item => item.id === user.id);
    this.users.splice(id, 1);
  }



}
