import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-rates',
  template: `
    <div class="font-superbig">
      {{hotelActive?.rate}}
        <i class="ion-ios-person"></i>
      </div>
  `,
  styles: [
  ]
})
export class RatesComponent {
 @Input() hotelActive: Hotel;


}
