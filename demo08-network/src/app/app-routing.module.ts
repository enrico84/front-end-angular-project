import { NgModule } from '@angular/core';

// Moduli routes
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';

// Rotte
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'network', component: NetworkComponent},
  // Deep Linking con parametro
  {path: 'profile/:id', component: ProfileComponent},
  {path: '**', redirectTo: 'login'},
];


@NgModule({
  // Configurazione del Router tramite "RouterModule":
  // "RouterModule.forRoot" si usa per definire le rotte dell'applicazione usando il modulo RouterModule
  // Il modulo usato per la navigazione o viene chiesto alla creazione del progetto, oppure successivamente con =>
  // ng g m app-routing -m=app-rounting.module --flat true --skip-tests
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
