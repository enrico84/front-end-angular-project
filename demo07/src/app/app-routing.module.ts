// DIPENDENZE DA ALTRI COMPONENTI
import { ParentComponent } from './parent-component/parent-component';
import { ExampleComponent } from './example-component/example-component.component';
import { DirettiveComponent } from './direttive-component/direttive-component.component';
import { DirettiveAttributoComponent } from './direttive-attributo-component/direttive-attributo.component';
import { PipeComponent } from './pipe-component/pipe-component.component';
import { HttpComponent } from './http-component/http-component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

// DIPENDENZE DA ALTRI MODULI
import { NgModule } from '@angular/core';
// Moduli routes
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {path: 'parent', component: ParentComponent},
      {path: 'example', component: ExampleComponent},
      {path: 'directives', component: DirettiveComponent},
      {path: 'attribute-directives', component: DirettiveAttributoComponent},
      {path: 'pipe', component: PipeComponent},
      {path: 'http', component: HttpComponent},
      {path: 'template-driven', component: TemplateDrivenComponent},
      {path: '**', redirectTo: 'ParentComponent'}
      ];

@NgModule({
  // Configurazione del Router tramite "RouterModule":
  // "RouterModule.forRoot" si usa per definire le rotte dell'applicazione usando il modulo RouterModule
  // Il modulo usato per la navigazione o viene chiesto alla creazione del progetto, oppure successivamente con =>
  // ng g m app-routing -m=app-rounting.module --flat true --skip-tests
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
