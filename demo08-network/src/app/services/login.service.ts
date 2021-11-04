import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public data: any;
  public url: string = "https://www.ugobetori.it/_notes/api-test/angular/angular2/users.php?id=";


  constructor(private httpClient: HttpClient) { }

  // Torna un oggetto OBSERVABLE
  getData(id) {
    return this.httpClient.get(this.url + id);
  }
}
