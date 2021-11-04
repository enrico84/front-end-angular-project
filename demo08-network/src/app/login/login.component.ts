import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Utente } from '../entity/Utente';
import { LoggedService } from '../services/logged.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
  styles: [
    `
      .btnRemove {
        margin-left: 10px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  title = "User Login"
  /* 
    nome e password collegate con il Two-way Data Binding
    con le variabili della form
  */
  nome: string;
  password: string;

  utente: Utente;
  logged: boolean = false;
  id;

  // DEPENDENCY INJECTION dei servizi che uso in questo Component
  constructor(
    private httpClient: HttpClient,
    private loggedService: LoggedService,
    private loginService: LoginService)
    { }

  ngOnInit() {
    // this.loggedService.logged_id
    // .subscribe(
    //   (data) => {
    //     console.log("onInit - data - evento onNext: ", JSON.stringify(data))
    //     this.logged_id = data;
    //   }
    // );
  }

  // Metodo di invio dati del template form
  inviaForm(): void {
    let dati = {
      "nome": ""+this.nome+"",
      "pw": ""+this.password+""
    }
    let data = JSON.stringify(dati);
    console.log(data);
    
    /* Invio dei dati di Login
     Le Response della libreria  httpClient sono in formato "OBSERVABLE" facenti parte della libriea rxjs
     Per ottenre valori da un "Observable" si utilizza un metodo "SUBSCRIBE"
     Con il subscribe ci si sottoscrive ad uno stream di dati emessi da un Observable
     Un Observable emette tre eventi che osserviamo: "onNext", "error", "onCompleted"
    */
    this.httpClient.post('https://www.ugobetori.it/_notes/api-test/angular/angular2/login.php', data)
    .subscribe(
      response => {
          console.log("Response - evento onNext: ", JSON.stringify(response))
          this.checkLog(response)
      }, 
      error => console.log('ErrorResponse - evento onError: ', JSON.stringify(error)),
      () => console.log('Evento onCompleted')
    );

  }

  checkLog(response: any) : void {
    console.log("Start metodo checkLog:: ", response['log'] + response['id'] + response['nome']);
    if( response['log'] == 'Si' ) {
      console.log("Log OK")
      this.logged = true;
      this.id = response['id'];
      console.log(this.id);
      this.loggedService.setData(this.logged, this.id);
      
      // getData Torna un oggetto OBSERVABLE a cui ci si sottoscrive
      this.loginService.getData(this.id)
      .subscribe(response => {
        this.addUser(response);
        this.utente = this.loggedService.utenti[0][this.id]
      });
    } else {
      console.log("Nome o password errata!");
    }
  }

  addUser(user) : void {
    console.log("Start metodo addUSer")
    this.loggedService.utenti.push(user);
  }

  removeUser() {
    console.log("Start metodo removeUser")
    this.loggedService.utenti.splice(this.id, 1);
    this.loggedService.setData(false, undefined);
  }

}
