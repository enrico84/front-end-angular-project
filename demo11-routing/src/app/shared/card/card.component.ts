import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
   <h3>{{title}}</h3>

   <div class="card mb-3">
     <div class="card-header">{{header}}</div>
     <div class="card-body">{{body}}</div>
   </div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {
  title = "Card Component";
  header = "Profile";

  body = "Lorem Ipsum...";

  constructor() { }

  ngOnInit(): void {
  }

}
