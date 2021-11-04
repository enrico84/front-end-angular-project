import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <!-- COMPONENTE PER IL ROUTING -->
    <app-navbar></app-navbar>
    <!--
      In questo tag sono renderizzati i Components corrispondenti 
      alle varie rotte definite in "app-rounting.module.ts" 
    -->
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'demo11-routing';

  /*
    RXJS OPERATOR: 
    con questi operatori posso filtrare(filter) l'oggetto "router.events" ottenendo la classe "NavigationStart" 
    e sottoscrivendomi(subscribe) ad ogni cambiamento della url
  */
  constructor(router: Router) {
    router.events
    .pipe(
      filter(event => event instanceof NavigationStart)
    )
    .subscribe( (event: NavigationStart) =>  {
      console.log(event.url);
    })
  }
}
