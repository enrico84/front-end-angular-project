//@ts-ignore
import { Component, OnInit, Input } from '@angular/core';

//@ts-ignore
@Component({
  selector: 'app-card',
  // templateUrl: './card.component.html',
  template: `
    <h3>{{titolo}}</h3>
    <h6>{{sottotitolo}}</h6>
    <div class="card mb-3">
      <div class="card-header" (click) = "opened = !opened">{{title}}</div>
      <div class="card-body" *ngIf=opened>
      <!--
          Posso passare contenuti definiti tra i due tag di apertura e chiusura
          di <app-card> in "parent.component.ts" tramite il tag <ng-content>
      -->
        <ng-content></ng-content>
      </div>
    <div>
  `,
  //styleUrls: ['./card.component.css']
  styles:[`
    `]
})
export class CardComponent implements OnInit {
  titolo:  string = "Card component Stateful";
  sottotitolo: string = "Clicca sulla tab per far apparire il body";
  @Input() title = "Titolo di default";
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
