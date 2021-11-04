import { Component } from "@angular/core";

@Component({
    selector: 'mc-navbar',
    template: `
        <nav class="navbar navbar-expand  navbar-dark bg-dark text-while">
          <a class="navbar-brand">Angular Navbar</a>
          <div class="navbar-collapse collapse">
            <ul class="navbar-nav">
              <!-- 
                "routerLink": indica il path definito nel file "app-routing.module" 
                "routerLinkActive": indica lo stile css da applicare quando
                la url del browser corrisponde a quella del routerLink
              -->
              <li class="nav-item">
                <a class="nav-link" routerLink="home" routerLinkActive="active">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="catalog" routerLinkActive="active">Catalog</a>
              </li>
            </ul>
          </div>
        </nav>
    `,
    styles: []
})
export class NavBarComponent {

}