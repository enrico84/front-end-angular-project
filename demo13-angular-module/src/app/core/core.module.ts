import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,

    // IMPORT DI "AppRoutingModule" POICHE' LA "NavbarComponent" UTILIZZA LA PROPERTY "routerLink" PER NAVIGARE TRA LE PAGINE
    AppRoutingModule
  ]
})
export class CoreModule { }
