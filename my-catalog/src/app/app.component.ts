import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mc-root',
  template: `

    <!-- COMPONENTE PER IL ROUTING -->
    <mc-navbar></mc-navbar>

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
  url: string;

  constructor() {
    this.url = environment.url;
    console.log(this.url);
  }
 
}
