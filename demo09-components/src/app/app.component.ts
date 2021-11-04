import { Component } from '@angular/core';

// METODI PER RXJS
import {filter, map} from 'rxjs/operators';

// MODULI PER IL ROUTING
import { NavigationEnd, Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>

    <!--
       routerLink: indica il path definito nel router
       routerLinkActive: indica lo stile CSS da applicare al link attivo
    -->
   <div class = "routing">
       <button><a routerLink="/parent" routerLinkActive="active">parent component</a></button>
       <button><a routerLink="/hello" routerLinkActive="active">hello component</a></button>
       <button><a routerLink="/card" routerLinkActive="active">card component</a></button>
       <button><a routerLink="/maintab" routerLinkActive="active">mainTabbar component</a></button>
   </div>

   <!-- In questo tag sono renderizzati i Components corrispondenti alle varie rotte definite nel "app-routing.module.ts" -->
   <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo09 - Componenti';

  arguments = ['Esempio di Routing',
    'PROPERTY BINDING e TWO-WAY DATA BINDING',
    'Comunicazione tra componenti padre e figlio', 'Uso di Direttive',
    'Pipe e creazione di una Custom Pipe'];

  constructor(private router: Router) {
    console.log(router);

    /*
     Esempio di uso della sintassi "RXJS" sull'Observable "events".
     L'operatore pipe accoda una serie di operatori rxjs
     Il "filter" si usa per filtrare gli oggetti prendendo l'oggetto "NavigationEnd",
     il quale viene passato all'operatore "map" che di questo oggetto seleziona la url,
     questa url viene passata dall'operatore map al metodo "subscribe" che stampa solo la url.
    */
    this.router.events
      .pipe(
           filter(evt => evt instanceof NavigationEnd),
           map( (evt: NavigationEnd) => evt.url )
      )
      .subscribe( (url:string) => {
        console.log('api', url);
    })

  }
}
