import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  animations: [
    //TRIGGER,
    trigger('animatedText', [
      state('show', style({
        opacity: 1,
        'margin-top': 0
      })), 
      state('hide', style( {
        opacity: 0,
        'margin-top': '50px'
      })),
      transition('show <=> hide', [
        animate('1s cubic-bezier(0.76, 0, 0.24, 1)')
      ])
    ])
  ],
  // CON [@animatedText] INTERCETTIAMO IL TRIGGER
  // CON (@animatedText.done) INTERCETTIAMO IL TERMINE DELL'EVENTO ANIMATION
  template: `
    <p [@animatedText]="state" (@animatedText.done)="showText($event)">
      {{textToShow}}
    </p>
  `,
  styles: [
  ]
})
export class AnimatedTextComponent implements OnChanges {

  @Input() text: string;
  textToShow: string;
  state = "show";

  // "changes.text" E' LA  PROPRIETA' "@Input text" CHE CAMBIA AD OGNI CLICK SUL BUTTON
  ngOnChanges(changes: SimpleChanges): void {

    // AL PRIMO CARICAMENTO DELLA PAGINA VISUALIZZIAMO IL TESTO SENZA TRANSIZIONE
    if(changes.text.isFirstChange()) {
      console.log('Component animated-text - first load of page', changes);
      this.textToShow = changes.text.currentValue;
    } else {
      // DAL SECONDO CARICAMENTO IN POI NASCONDO IL TESTO
      console.log('Component animated-text - next load of page', changes);
      this.state = "hide";
    }
  }

  /*
    VENGONO INTERCETTATI GLI EVENTI CON I CAMBI DI STATO (event.toState passa dallo stato 'void' ad 'hide')
    QUINDI INTERCETTO IN QUESTO CASO IL TERMINE DELL'ANIMAZIONE (@animatedText.done)
  */
  showText(event: AnimationEvent): void {
    console.log("Fine evento: ", event);
    if(event.toState === "hide") {
      this.state = "show";
      this.textToShow = this.text;
    }
  }

}
