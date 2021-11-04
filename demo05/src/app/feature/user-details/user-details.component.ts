import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {

  public user: User;

  constructor(public activatedRoute: ActivatedRoute, public httpClient: HttpClient) {

   }

  // Avviato dopo il costruttore
  // qui fare tutto ciò di diverso da iniezione servizi(come ActivatedRoute, HttpClient) 
  // diverso da inizializzazione di proprietà(this.prop = prop)
  ngOnInit(): void {
    console.log(this.activatedRoute);
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    // Recupero il singolo User tramite l'id e con un "2 way binding" lo inietto nel template.html
    this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
      .subscribe(res => {
        this.user = res;
      })
  }

}
