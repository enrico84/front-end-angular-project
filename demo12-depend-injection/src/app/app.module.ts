import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
   // Iniettare un Service(si può scegliere tra un service fake o uno reale):
   // ThemeService oppure
   // {provide: ThemeService, useClass: FakeThemeService},
   // {provide: ThemeService, useClass: ThemeService}
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
