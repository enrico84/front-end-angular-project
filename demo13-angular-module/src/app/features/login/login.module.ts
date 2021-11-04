import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LostpassComponent } from './components/lostpass/lostpass.component';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [LoginComponent, SigninComponent, LostpassComponent, RegistrationComponent],
  // "CommonModule" E'UN SOSTITUTO DI "BrowserModule" IMPORTATO IN "app-module.ts" MA SENZA LE FUNZIONALITA' DI BOOTSTRAP,
  // E FORNISCE FUNZIONALITA' COME "*ngIf, *ngFor, ecc" AI COMPONENTS DI QUESTO MODULO (LoginComponent)
  imports: [
    CommonModule,
    SharedModule,

    // LAZY LOADING - VIENE CARICATO IL COMPONENTE "LoginComponent" QUANDO CI SI TROVA al path 'http://localhost:4200/login/'
    RouterModule.forChild([
      { 
        path: '', 
        component: LoginComponent,
        
        //  ESEMPIO DI 'ROUTER CHILDREN'
        children: [
          {path:'signin', component: SigninComponent},
          {path:'lostpass', component: LostpassComponent},
          {path:'registration', component: RegistrationComponent},
          {path:'', redirectTo: 'signin'},
        ]
    },
    ])
  ]
})
export class LoginModule { }
