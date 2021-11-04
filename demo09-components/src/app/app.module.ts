// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Modulo HTTP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from '../app/components/hello.component';
import { CardComponent } from './shared/card/card.component';
import { ParentComponent } from './components/parent/parents.component';
import { TabbarComponent } from './shared/tabbar.component';
import { MainTabbarComponent } from './shared/main-tabbar.component';
import { MeteoComponent } from './components/meteo.component'
import { FormsModule } from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, HelloComponent, // ===> nuovo componente
    CardComponent, TabbarComponent, MainTabbarComponent, MeteoComponent,   // ===> nuovo componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
