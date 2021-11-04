import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-os-price',
  template: `
    <span [style.color]="price > 500 ? 'red' : null">
        {{price | number: '1.2-2'}}
      </span>
  `,
  styles: [
  ]
})
export class OsPriceComponent {
  @Input() price: number;

}
