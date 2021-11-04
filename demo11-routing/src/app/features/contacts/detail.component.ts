import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <!-- <pre>{{user | json}}</pre> -->
    <h2>Name: {{user?.name}}</h2>
    <h2>Username: {{user?.username}}</h2>
    <h2>Email: {{user?.email}}</h2>
    <h2>Phone: {{user?.phone}}</h2>
    <br>
    <button (click)='goToNext()'>Next</button>
  `,
  styles: [
  ]
})
export class DetailComponent {
  user: any;
  id: number;
  
  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient,
    private router: Router) { 
      /* 
        Con "ActivatedRoute" posso sottoscrivermi con una subscribe oppure recuperare le informazioni sulla url del browser.
        In questo caso l'id con cui effettuare la chiamata per tornare il singolo user
      */
      activatedRoute.params.subscribe(
        params => {
          // this.id = +activatedRoute.snapshot.params['id'];
          this.id = +params['id']  // TRICK => con + converto la stringa in un number
          http.get<any>(`https://jsonplaceholder.typicode.com/users/${this.id}`)
          .subscribe(res => {
             this.user = res;
          })
        }
      );
    }

    goToNext(): void {
      const nextId = this.id + 1; 
      this.router.navigateByUrl(`contacts/${nextId}`)
    }
}
