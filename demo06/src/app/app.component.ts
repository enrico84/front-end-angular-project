import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
   //   styles: [] 
})

export class AppComponent {
  
  title = "Angular demo6";
  subtitle = "Organizzazione a componenti"
  public activeSection = "homepage";

  constructor(private router: Router) {
    console.log(this.router);

    // Uso della sintassi "rxjs" sull'Observable "events"
    // L'operatore pipe accoda una serie di operatori rxjs 
    // Il "filter" si usa per filtrare gli oggetti prendendo l'oggetto "NavigationEnd", 
    // il quale viene passato all'operatore "map" che di questo oggetto seleziona la url,
    // questa url viene passata dall'operatore map al metodo "subscribe"
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

