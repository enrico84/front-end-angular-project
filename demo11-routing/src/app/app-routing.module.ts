import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { DetailComponent } from './features/contacts/detail.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "catalog", component: CatalogComponent},
    {path: "contacts", component: ContactsComponent},
    // Deep Linking con parametro
    {path: "contacts/:id", component: DetailComponent},
    {path: "**", redirectTo: ""}
];

@NgModule({
  // => Modulo di Routing per dichiarare i path
    // "RouterModule.forRoot" si usa per definire le rotte dell'applicazione usando il modulo RouterModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
