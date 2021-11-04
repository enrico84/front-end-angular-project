import { Injectable } from "@angular/core";

/*  
  CON IL DECORATOR @Injectable SI ESEGUE L'INJECTOR DI QUESTO SERVICE NEL MODULO "ROOT",
  COSI' DA POTER DEFINIRE DIPENDENZE DENTRO ESSO (ES. HttpClient)
  E SENZA BISOGNO DI DEFINIRE LA CLASSE NELL'ARRAY DI "providers" DI "app-module"
  */
@Injectable({
    providedIn: "root"
})
export class UserStore {
    users: any[];

    initUsers(usersResult: any[]) {
        this.users = usersResult;
    }

    deleteUser(id: number) {
        const index = this.users.findIndex(us => us.id === id);
        this.users.splice(index, 1);
    }
}