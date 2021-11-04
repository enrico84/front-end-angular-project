import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // CARICAMENTO LAZY LOADING - VIENE CARICATO IL MODULO E NON IL COMPONENTE
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule ) },
  {path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule ) },
  {path: 'contacts', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) },
  {path: '**', redirectTo: 'login'},
];

  // OLD STYLE WITH LAZY LOADING 
  // {path: 'login', loadChildren: './features/login/loging.module#LoginModule'},
  // {path: 'catalog', loadChildren: './features/catalog/catalog.module#CatalogModule'}

  // OLD STYLE WITHOUT LAZY LOADING 
  //{path: 'login', component: LoginComponent},
  //{path: 'catalog', component: CatalogComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
