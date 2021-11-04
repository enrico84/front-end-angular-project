import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

// VERSIONE ANGULAR 9 - CARICAMENTO LAZY LOADING: VIENE CARICATO IL MODULO E NON IL COMPONENTE
const routes: Routes = [
  {path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule), canActivate:[AuthGuard] },
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  {path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule), canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'search'}
];

// VERSIONE DEPRECATA FINO AD ANGULAR 7 - LAZY LOADING: VIENE CARICATO IL MODULO E NON IL COMPONENTE
/*
const routes: Routes = [
  {path: 'search', loadChildren: './features/search/search.module#SearchModule', canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'search'}
];
*/

// OLD STYLE SENZA IL CARICAMENTO LAZY LOADING
/*
const routes: Routes = [
  {path: 'search', component: SearchComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'no-result', component: NoResultComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'search'}
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // ESPORTA LE FUNZIONI DI ROUTING PER I COMPONENTI DICHIARATI IN "AppModule" (<router-outlet>)
})
export class AppRoutingModule { }
