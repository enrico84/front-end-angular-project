import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Hotel, Room } from '../../model/hotel';

const URL = "http://localhost:3000";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  hotels: Hotel[];
  hotelActive: Hotel; // OGGETTO ATTIVO AL CLICK SU UN HOTEL
  activeImage : string;
  city: string = "Rome";

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router
    ) {
    this.searchHotels(this.city);
   }

  searchHotels(f: string): void{
    this.city = f;
    this.http.get<Hotel[]>(`${URL}/hotels?q=${f}`)
      .subscribe(result => {
        if(!result.length) {
          this.router.navigateByUrl("search/no-result");
          return;
        }
        this.hotels = result;
        this.setActiveHotel(this.hotels[0]);
      })
  }

  // SETTO COME OGGETTI ATTIVI L'HOTEL E LA PRIMA IMMAGINE DI TALE HOTEL
  setActiveHotel(hotel: Hotel): void {
    this.hotelActive = hotel;
    this.activeImage = hotel.images[0];
  }

  // AGGIUNGE LA STANZA SCELTA
  addToCart(room: Room, hotelActive: Hotel): void {
    this.cartService.addToCart(hotelActive, room);
  }

  /* 
    SIMULO L'INVIO DI UNA UNA EMAIL
    CON IL TRICK "Destructuring" - {inputMail, msg} COME PARAMETRI DEL METODO
    INVIO DIRETTAMENTE I VALORI INDICATI NEL TAG "name" DELLA <input> E <textarea>
    DELLA FORM
  */
  sendEmail({inputMail, msg}): void {
    window.alert(`send: 
      ${inputMail}, 
      ${msg},
      ${this.hotelActive?.email}
    `);
  } 

}
