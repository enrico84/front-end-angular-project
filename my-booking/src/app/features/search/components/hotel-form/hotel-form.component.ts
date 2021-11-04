import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-form',
  template: `
    <form #f="ngForm" (submit)="searchHotels.emit(f.value.city)">
      <input type="text" placeholder="City (Rome or Milan)" [ngModel] = "city" name = "city">
      <button type="submit">SEARCH</button>
    </form>
  `,
  styles: [
  ]
})
export class HotelFormComponent {

  @Input() city: string;

  @Output() searchHotels: EventEmitter<string> = new EventEmitter<string>();


}
