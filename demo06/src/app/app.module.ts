import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { ContactsComponent } from './feature/contacts/contacts.component';
import { UsersComponent } from './feature/users/users.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';
import { SettingsComponent } from './feature/settings/settings.component';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomepageComponent,
    ContactsComponent,
    UserDetailsComponent,
    SettingsComponent,
    NavbarComponent
    // importo i componenti che servono
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    //Iniettare un Service(si può scegliere tra un service fake o uno reale):
    //ThemeService oppure
    //{provide: ThemeService, useClass: FakeThemeService},
    //{provide: ThemeService, useClass: ThemeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
