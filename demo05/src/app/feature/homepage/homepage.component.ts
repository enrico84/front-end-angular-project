import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  title = "app-homepage";

  constructor() { }

  ngOnInit(): void {
  }

}
