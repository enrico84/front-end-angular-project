import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  template: `
    <div>
      <!-- FAR APPARIRE STELLINE PIENE E VUOTE -->
      <i 
        *ngFor="let star of (5 | intToArray); let i = index;"
        class="icon"
        [ngClass]="{
          'ion-ios-star': i < stars,
          'ion-ios-star-outline': i >= stars
        }">
      </i>
      <!-- FAR APPARIRE SOLO STELLINE PIENE -->
      <!-- 
      <i 
        *ngFor="let star of (hotelActive?.stars | intToArray)"
        class="icon ion-ios-star"
        >
      </i>
      -->
    </div>
  `,
  styles: [
  ]
})
export class StarsComponent {

  @Input() stars: number;

}
