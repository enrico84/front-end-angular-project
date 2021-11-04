import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  //ANIMATIONS E' UNA PROPRIETA' CON CUI DEFINIRE ANIMAZIONI E TRIGGER
  animations: [
    // TRIGGER
    trigger('collapsable', [
      state('opened', style({
        height: "*"
      })),
      // STATI DEL TRIGGER
      state('closed', style({
        height: 0,
        padding: 0
      })),
      // TRANSIZIONE - valori animate presi dal sito "https://easings.net/"
      transition('opened <=> closed', [
        animate('0.8s cubic-bezier(0.76, 0, 0.24, 1)')
      ])
    ])
  ],
  template: `
    <div class="card bg-dark text-white mb-1">
      <div class="card-header" (click)="toggle()">{{title}}</div>

      <!-- 
        CON IL TRIGGER "[@collapsable]" INTERCETTO LO "state" DICHIARATO da "opened" a "closed" e viceversa
        "style=overflow: hidden" mi permette di nascondere la scritta nel tag "card-body" 
      -->
      <div class="card-body"
        style="overflow: hidden"
        [@collapsable]="state">

        <!-- 
          Con la "Content Projection" <ng-content> recupero quello che "app-component.ts"
          mi invia nel body   
        -->
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() title: string;
  state = 'opened';

  toggle(): void {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
