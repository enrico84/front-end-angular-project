import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './feature/users/user.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { ContactsComponent } from './feature/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './feature/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomepageComponent,
    ContactsComponent,
    UserDetailsComponent
    // importo i componenti che servono
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomepageComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserDetailsComponent},
      {path: '**', redirectTo: 'home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
