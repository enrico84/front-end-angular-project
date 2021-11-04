import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  template: `
    <!--navigation bar-->
    <div class="navigation" *isAuthorized>  <!-- DIRETTIVA CUSTOM-->
    <!-- <div class="navigation" *ngIf="authService.isLogged()"> --> <!-- SENZA DIRETTIVA -->
      <div class="horiz-grid">
        <div class="logo">BOOKING</div>
        <div class="horiz-grid">
          <span class="btn" routerLink="search" routerLinkActive="active">SEARCH</span>
          <span class="btn" routerLink="cart" routerLinkActive="active">
            CART ({{cartService.cartItems.length}})
          </span>
          <span class="btn" (click)="authService.logout()" >LOGOUT</span>
        </div>
        <em>{{authService.data?.name}}</em>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class NavbarComponent {

  constructor(
    public cartService: CartService,
    public authService: AuthService
    ) {}

}
