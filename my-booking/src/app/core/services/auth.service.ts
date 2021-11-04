import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "src/app/model/auth";

const URL = 'http://localhost:3000/login';

// SERVICE INIETTABILE GLOBALMENTE
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    data: Auth;
    error: any;

    constructor(
        private http: HttpClient,
        private router: Router) {}
    
    /*
        TRICK "Destructuring" - {user, pass} COME PARAMETRI DEL METODO
        INVIO DIRETTAMENTE I VALORI INDICATI NEL TAG "name" DELLA <input> E <textarea>
        DELLA FORM
    */
    login({user, pass}): void {
        const parameters = new HttpParams()
            .set('user', user)
            .set('pass', pass);

        this.http.get<Auth>(`${URL}`, {params: parameters}).subscribe(
            resp => {
                this.data = resp;
                this.router.navigateByUrl("search");
            },
            err => this.error = err
        )
    }
    
    logout(): void{
        this.data = null;
        this.router.navigateByUrl("login");
    }

    isLogged(): boolean {
        const isAuth = this.data && this.data.token ? true : false;
        return isAuth;
    }



}