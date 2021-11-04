import { Component, OnInit } from '@angular/core';
import { LoggedService } from './services/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
      .link {
        float: left;
        width: 140px;
        padding-left: 10px;
      }
      .routerOutlet {
        float: left;
        width: 700px;
        padding: 0px;
        background-color: #ccc; /* Grigio */
      }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'Menu';
  logged = false;
  logged_id;

  constructor(private loggedService: LoggedService) { }

  ngOnInit() : void {
    // this.id = this.loggedService.logged;
    // this.loggedService.id.subscribe (
    //   (data) => {
    //     console.log('App data: ', data);
    //     this.id = data;
    //   }
    // )
  }

}
