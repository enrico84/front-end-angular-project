import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel, Room } from 'src/app/model/hotel';

@Component({
  selector: 'app-reservations',
  template: `
    <div class="horiz-grid separator"
          *ngFor="let room of hotelActive?.rooms"
      (click)="addToReservation.emit(room)"  
    >
      <div>{{room.label}}</div>
      <div>
        {{room.price}}
        <i class="ion-ios-cart"></i>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ReservationsComponent {
  @Input() hotelActive: Hotel;

   /* 
     L'EVENTO "addToReservation" PASSERA' TRAMITE "emit" UN OGGETTO "Room" NEL TEMPLATE,
     IL QUALE VERRA' CATTURATO DAL COMPONENTE PADRE "SearchComponent"
  */
  @Output() addToReservation: EventEmitter<Room> = new EventEmitter<Room>();

}
