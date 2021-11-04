import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './feature/contacts/contacts.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { SettingsComponent } from './feature/settings/settings.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';
import { UsersComponent } from './feature/users/users.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
