import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <!-- 
      Con [routerLink]=[...] dico di andare alla url /contacts/:id 
      specificata nel file "app-rountingt.module.ts"
    -->
    <li *ngFor='let user of users; let i = index' [routerLink]="['/contacts', user.id]">
      {{i+1}})  {{user.name}}
      <br>
    </li>
  `,
  styles: [
  ]
})
export class ContactsComponent{
  users: any[];

  /*
   Chiamata ad un servizio che torna un JSON mock di Users,
   con il quale popolo il mio l'array "users"
  */
  constructor(private http: HttpClient) { 
    http.get<any[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe(res => this.users = res);
  }


}
