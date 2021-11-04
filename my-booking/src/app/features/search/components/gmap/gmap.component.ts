import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-gmap',
  template: `
    <div>
       <img src="https://maps.googleapis.com/maps/api/staticmap?center={{hotelActive?.location.address}}&zoom=15&size=500x200&key=AIzaSyDwUcr_6FT5xrxWMVtbfu3ZHQBc7wTg7xE"
            width="100%" height="200">
       <div class="address">
         <div class="font-big">{{hotelActive?.name}}</div>
         <div class="font-small">{{hotelActive?.location.address}}</div>
       </div>
    </div>
  `,
  styles: [
  ]
})
export class GmapComponent {
  @Input() hotelActive: Hotel;

}
