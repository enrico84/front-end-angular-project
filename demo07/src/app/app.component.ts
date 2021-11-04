import { Component } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Component';
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
