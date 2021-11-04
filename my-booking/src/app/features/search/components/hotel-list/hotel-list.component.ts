import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
      <div class="font-big">Hotel in 
          {{ 
            hotelActive?.city === 'milan' ? 'Milan' : 
            hotelActive?.city === 'roma' ? 'Rome' : city
          }}
        </div>

        <div class="horiz-grid separator"
             *ngFor="let hotel of hotels;"
            (click)="setActive.emit(hotel)"
            [ngClass] = "{'active' : hotel.id === hotelActive?.id}"  
        >
          <div>Hotel {{hotel.name}}</div>
          <div>da € {{hotel.rooms[0].price}}</div>
        </div>

        <div class="separator"></div>
        <div class="horiz-grid">
          <div></div>
          <em>{{hotels?.length}} results</em>
        </div>
  `,
  styles: [
  ]
})
export class HotelListComponent {

  @Input() hotels: Hotel[];
  @Input() hotelActive: Hotel; // OGGETTO ATTIVO AL CLICK SU UN HOTEL
  @Input() city: string;

  /* 
     L'EVENTO "setActive" PASSERA' TRAMITE "emit" UN OGGETTO "hotel" NEL TEMPLATE,
     IL QUALE VERRA' CATTURATO DAL COMPONENTE PADRE "SearchComponent"
  */
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();

}
