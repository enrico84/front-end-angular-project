import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
