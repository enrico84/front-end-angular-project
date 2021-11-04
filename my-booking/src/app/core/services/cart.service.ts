import { Injectable } from "@angular/core";
import { CartItem } from "src/app/model/cart-item";
import { Hotel, Room } from "src/app/model/hotel";
import { AuthService } from "./auth.service";

// SERVICE INIETTABILE GLOBALMENTE
@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: CartItem[] = [];

    constructor(private authService: AuthService) {}

    // AGGIUNGO STANZE ALLA LISTA
    addToCart(hotel: Hotel, room: Room): void {
       /* 
        this.cartItems.push(
            {
            hotel: hotel, 
            room: room, 
            creationDate: Date.now()
            }
        );
        */
       /*
           CON LO SPREAD OPERATOR ... SPLITTO this.cartItems IN SOTTO-OGGETTI
           CON CUI RIPOPOLO L'ARRAY + IL NUOVO OGGETTO {hotel:hotel, ...}
        */
       this.cartItems = [
           ...this.cartItems,
           {
            hotel: hotel, 
            room: room, 
            creationDate: Date.now()
            }
        ]
    }

    // RIMUOVO STANZE DALLA LISTA
    removeToCart(cartItem: CartItem): void {
        this.cartItems = this.cartItems.filter(
            item => item.creationDate !== cartItem.creationDate
        );
    }

    // INVIO LE STANZE PRENOTATE AD UN FANTOMATICO SERVER 
    // TRAMITE API REST
    proceed(): void {
        let room = this.cartItems.length > 1 ? "stanze" : "stanza";
        window.alert(`
            Invio prenotazione di ${this.cartItems.length} ${room}
            a ${this.authService.data.name}
        `);
    }
}