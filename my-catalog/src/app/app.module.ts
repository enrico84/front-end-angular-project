import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CatalogListComponent } from './features/catalog/components/catalog-list.component';
import { CatalogFormComponent } from './features/catalog/components/catalog-form.component';
import { OsIconComponent } from './features/catalog/components/os-icon.component';
import { OsPriceComponent } from './features/catalog/components/os-price.component';
import { CardComponent } from './shared/card.component';
import { NavBarComponent } from './core/components/navbar.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    // features: home
    HomeComponent,
    
    // features: catalog
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent,
    OsIconComponent,
    OsPriceComponent,

    // core
    NavBarComponent,
    
    // shared
    CardComponent
  ],
  imports: [
    BrowserModule,
    
    // IMPORT MODULO CHE GESTICE IL FORM
    FormsModule,

     // IMPORT MODULO CHE GESTISCE LE CHIAMATE HTTP
    HttpClientModule,

     // IMPORT MODULO CHE GESTISCE LE ROUTES
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
