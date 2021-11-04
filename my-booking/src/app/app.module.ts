import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

const importComponents = [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  
  AppRoutingModule,
  SharedModule,
  CoreModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...importComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
