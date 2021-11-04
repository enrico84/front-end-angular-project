import { ParentComponent } from '../app/components/parent/parents.component'
import { HelloComponent } from '../app/components/hello.component'
import { CardComponent } from '../app/shared/card/card.component'
import { MainTabbarComponent } from './shared/main-tabbar.component'

// DIPENDENZE DA ALTRI MODULI
import { NgModule } from '@angular/core';

// MODULI ROUTES
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'parent', component: ParentComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'card', component: CardComponent},
  {path: 'maintab', component: MainTabbarComponent},
  {path:'**', redirectTo:'ParentComponent'}
];

@NgModule({
  // Configurazione del Router tramite "RouterModule":
  // "RouterModule.forRoot" si usa per definire le rotte dell'applicazione usando il modulo "RouterModule"
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
