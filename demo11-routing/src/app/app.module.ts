import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// MODULI PER IL ROUTING
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { CardComponent } from './shared/card/card.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DetailComponent } from './features/contacts/detail.component';
import { CatalogPipe } from './shared/custom-pipe/catalog-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ContactsComponent,
    CardComponent,
    HomeComponent,
    NavbarComponent,
    DetailComponent,
    CatalogPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // IMPORT DEL MODULO CHE GESTISCE LE ROUTES
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
