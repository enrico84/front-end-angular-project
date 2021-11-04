import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo13-angular-module';
  url : string;

  constructor() {
    this.url = environment.url;
    console.log(this.url);
  }

}
