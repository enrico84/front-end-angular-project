import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  animations: [
    // TRIGGER
    trigger('buttonAnimated', [
      // STATI DEL TRIGGER
    state('over', style ({
      transform: 'scale(1.3) rotate(20deg)'
    })),
    state('out', style({
      transform: 'scale(1) rotate(0deg)'
    })),
    state('selected', style({
      backgroundColor: 'orange',
      borderColor: 'white',
      transform: 'scale(1.5) rotate(-10deg)'
    })),
    // TRANSIZIONE - setto le transizioni da uno "state" ad un altro
    // valori animate presi dal sito "https://easings.net/"
    transition('out <=> over', [
      animate('0.6s cubic-bezier(0.76, 0, 0.24, 1)')    
    ]),
    transition('* <=> selected', [
      animate('0.8s cubic-bezier(0.76, 0, 0.24, 1)')    
    ])
  ])
  ],
  template: `
    <button 
      class="button mb-4"
      [disabled] = "selected"
      [@buttonAnimated]="state"
      (mouseover)= "state = 'over'"
      (mouseout)= "state = 'out'"
      >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
    .button {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #222;
      color: #222;
      padding: 10px 22px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 20px;
      margin: 10px, 2px;
      outline: none;
      cursor: pointer;
    }
    `
  ]
})
export class AnimatedButtonComponent implements OnChanges {

  state="out";
  @Input() selected = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    // "changes.selected" E' LA  PROPRIETA' "@Input selected" CHE CAMBIA AD OGNI CLICK SUL BUTTON
    if(changes.selected) {
      this.state =  changes.selected.currentValue ? "selected" : "out";
    }
  }


}
