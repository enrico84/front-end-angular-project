import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}

    /*
        SE NON SI è LOGGATI SI VIENE REDIRETTI AL LOGIN
    */    
    canActivate() {
        const isAuth = this.authService.isLogged();
        if (!isAuth) {
          this.router.navigateByUrl('login');
        }
        return isAuth;
      }
    
}