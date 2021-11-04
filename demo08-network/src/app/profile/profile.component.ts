import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggedService } from '../services/logged.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  utente;
  inputText;
  assetsPath = "https://www.ugobetori.it/_notes/api-test/angular/angular2/img/";

  @ViewChild('myInput') myInput: ElementRef;

  // DEPENDENCY INJECTION dei servizi che uso in questo Component
  constructor(
    private myActRoute: ActivatedRoute,
    private loggedService: LoggedService
  ) { }

  /*
    Tramite la classe "ActivatedRoute" recupero i dati dalla rotta "Attiva"
    definita nell'array Routes del file "app-routing.module.ts", in particolare
    tramite il valore ":id" recupero l'utente dalla url e popolando l'oggetto utente.
  */
  ngOnInit(): void {
    this.myActRoute.params
    .subscribe( params => {
      console.log("ProfileComponent - onInit params: " ,params);
      if( params['logged_id'] != 'undefined' ) {
        this.id = params['logged_id'];
        this.utente = this.loggedService.utenti[this.id];
      }
    });
  }

}
