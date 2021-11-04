import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NoResultComponent } from "./no-result.component";
import { SearchComponent } from "./search.component";

// SPECIFICA LE REGOLE DEL ROUTING PER LA COMPONENTE SEARCH
@NgModule({
    imports: [
      RouterModule.forChild([
        {path:'', component: SearchComponent},
        {path: 'no-result', component: NoResultComponent},
      ])
    ],
    exports: [RouterModule]  // ESPORTA LE FUNZIONI DI ROUTING PEE I COMPONENTI DICHIARATI IN "SearchModule"
  })
export class SearchRoutingModule {}