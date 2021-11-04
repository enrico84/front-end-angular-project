import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CatalogComponent } from "./catalog.component";
import { CatalogFormComponent } from "./components/catalog-form/catalog-form.component";
import { CatalogListComponent } from "./components/catalog-list/catalog-list.component";
import { NoResultComponent } from './no-result.component';

@NgModule({
    declarations:[
      CatalogComponent,
      CatalogFormComponent,
      CatalogListComponent,
      NoResultComponent
    ],

  // "CommonModule" E'UN SOSTITUTO DI "BrowserModule" IMPORTATO IN "app-module.ts" MA SENZA LE FUNZIONALITA' DI BOOTSTRAP,
  // E FORNISCE FUNZIONALITA' COME "*ngIf, *ngFor, ecc" AI COMPONENTS DI QUESTO MODULO (CatalogComponent)
    imports: [
              CommonModule,
              SharedModule,
              FormsModule,

              // LAZY LOADING - VIENE CARICATO IL COMPONENTE "CatalogComponent" QUANDO CI SI TROVA al path 'http://localhost:4200/catalog/'
              RouterModule.forChild([
                {path: '', component: CatalogComponent},
                {path: 'no-result', component: NoResultComponent}
              ])
            ],
    providers: []
})
export class CatalogModule {}