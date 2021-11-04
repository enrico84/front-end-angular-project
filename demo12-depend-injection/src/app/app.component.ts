import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { UserService } from './services/user.service';
import { UserStore } from './services/user.store';

@Component({
  selector: 'ec-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div [style.color]="configService.theme === 'light' ? 'lightgrey' : 'darkcyan'">
      <h1>
        Welcome to {{configService.theme}}!
      </h1>
      <button (click)="configService.setTheme('light')">Tema Light</button>
      <button (click)="configService.setTheme('dark')">Tema Dark</button>
    </div>
    <div class = "mt-3">
      <h2>Lista di utenti</h2>
        <li *ngFor="let user of store.users;">
            {{user.name}}
            <button (click)="action.delete(user.id)">Delete</button>
        </li>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  // Injection dei Service
  constructor(public configService: ConfigService,
              public action: UserService,
              public store: UserStore) {
                action.getUsers();
  } 

  // setTheme(): void {
  //   if(this.configService.theme === "light") {
  //     this.configService.setTheme("dark");
  //   } else {
  //     this.configService.setTheme("light");
  //   }
  // }
  
}
