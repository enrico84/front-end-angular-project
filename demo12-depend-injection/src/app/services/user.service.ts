import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStore } from "../services/user.store";

/*  
  CON IL DECORATOR @Injectable SI ESEGUE L'INJECTOR DI QUESTO SERVICE NEL MODULO "ROOT",
  COSI' DA POTER DEFINIRE DIPENDENZE DENTRO ESSO (COME HttpClient)
  E SENZA BISOGNO DI DEFINIRE IL SERVICE NELL'ARRAY DI "providers" DI "app-module"
  */
@Injectable({
    providedIn: "root"
})

/* 
    VIENE GESTITA LA LOGICA DI BUSINESS NEL SERVICE, DISACCOPPIANDOLA DAL COMPONENT
    DISACCOPPIAMENTO TRA CHIAMATE HTTP E GESTIONE STATO APPLICATIVO (HttpClient E UserStore)
*/
export class UserService  {

    constructor(private http: HttpClient,
                private store: UserStore
    ) {}

    // LA HTTP-GET TORNA UNA "OBSERVABLE"
    getUsers() {
       return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
          .subscribe(result => this.store.initUsers(result));
    }

    delete(id: number): void {
        this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .subscribe( () => this.store.deleteUser(id));
    }
}