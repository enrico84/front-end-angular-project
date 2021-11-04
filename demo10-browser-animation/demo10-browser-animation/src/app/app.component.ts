import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-3">

      <app-animated-button 
        *ngFor = "let section of sections"
        (click)="active = section" 
        [selected]="active.id == section.id">
        {{section.label}}
      </app-animated-button>

      <!-- 
        PASSAGGIO DELLA PROPRIETA' "active.text" in input 
        al Component "app-animated-text", che la gestirà
      -->
      <app-animated-text [text]='active.text'></app-animated-text>

      
      <app-card title="FIRST CARD">
        <div>{{firstBody}}</div>
      </app-card>

      <app-card title="SECOND CARD">
        <div>{{secondBody}}</div>
      </app-card>
    </div>
  `,
  styles: []
})
export class AppComponent {

  sections = [
    {id:1, label: "FIRST", text: "Questa è la prima label"},
    {id:2, label: "SECOND", text: "Questa è la seconda label"},
    {id:3, label: "THIRD", text: "Questa è la terza label"}
  ]

  active = this.sections[0];

  firstBody = "Questo è il body";

  secondBody = "Objects in real life don’t just start and stop instantly, " +
               "and almost never move at a constant speed. When we open a drawer, "+ 
               "we first move it quickly, and slow it down as it comes out. "+
               "Drop something on the floor, and it will first accelerate downwards, "+ 
               "and then bounce back up after hitting the floor.";


}
