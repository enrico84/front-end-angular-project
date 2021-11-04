import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  title = 'component-users';
  subtitle = 'La lista di Utenti viene recuperata tramite un mock-server http'
  public users: User[]; //tipizzo users al tipo User
  public selectedUser : User;
  public error : boolean;

  constructor(private http: HttpClient, private router: Router) {
    //this.http = http;

  }

  getUsers() {
    this.http.get<User[]>('http://localhost:3000/users')
    .subscribe( (res) => {
      this.users = res;
    });
  }

    // Add/Edit valori all'array users in base a ciò che seleziono nel form
   formSubmit(f: NgForm): void {
      if(this.selectedUser?.id) {
        this.edit(f);
      } else {
        this.add(f);
      }
   }

   // Aggiungo i valori all'array users in base a ciò che inserisco nel form
  add(f: NgForm): void {

    // Il metodo POST torna un singolo elemento - un User
    this.http.post<User>('http://localhost:3000/users', f.value)
      .subscribe( res => {
        //console.log(res);
        this.users.unshift(res);
        f.reset();        // ripulisce i campi del form dopo aver aggiunto un elemento
      });  
   }

    // Modifico i valori all'array users in base a ciò che inserisco nel form
  edit(f: NgForm): void {
    this.error = false;
    
    // Il metodo PATCH modifica un singolo elemento passato nella url tramite l'id - un User
    this.http.patch<User>(`http://localhost:3000/users/${this.selectedUser.id}` , f.value)
      .subscribe(
          
          // esempio di next
          (res) => 
          {
            this.users = this.users.map(u => {
              return u.id === this.selectedUser.id ? res : u 
            })
          },

          // esempio di errore
         (error) => {
           this.error = true;
         }
      )  
   }


   // Eliminazione di una elemento dall'array users:
   // "filter" esegue un filtro sull'array users tornando un nuovo array users eccetto con l'user con id = userId
  delete(userId: number) : void {

    this.http.delete(`http://localhost:3000/users/${userId}`)
    .subscribe( () => {
       this.users = this.users.filter(user => user.id !== userId)
      });  
  }

  // Con "Router" posso navigare alla pagina /users/:id referenziata dal component UserDetails
  openDetail(userId: number) : void {
    this.router.navigateByUrl(`/users/${userId}`);

  }

  selectUser(user : User) : void {
    console.log(user);
    this.selectedUser = this.selectedUser?.id === user.id ? null : user;
  }

  
  // #name e #age del template html sono come 'getElementById'
  // collegati a name e age passati al metodo
  keydownHandler(name: HTMLInputElement, age: HTMLInputElement): void {
     // Aggiungo un utente nell'array users 
     this.users.unshift( 
       {
        id: Date.now(),
        name: name.value,
        age: +age.value, // parseInt(age.value)
        gender: 'M',
        city: 'Milano',
        birthday: 443358780000,
        bitcoins: 3.3457832
      }
     )
   }

}
