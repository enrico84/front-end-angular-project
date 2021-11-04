# MyBooking

- 1. PARTENDO DA UN TEMPLATE E DA CSS FISSI, LE SEZIONI MODIFICATE SONO
  CART, LOGIN E SEARCH

1) Gestione Form, Mappe, Immagini, Icone
2) Rest Api: GET da un json-server che legge i valori dal file server/db.json
3) Uso dell'utility online "http://json2ts.com/" per ricavare da un Json delle classi Typescript
4) Creazione, tramite Dependency Injection , di un Servizio "Globale" condiviso tra più View
   e Component.
   Il service si rende Globale e iniettabile dove serve tramite il Decorator "Injectable()", rendendolo disponibile a livello di root module(modulo principale dell'applicazione) con la dicitura -> provideIn: 'root'.
   Il service verrà condiviso tra i componenti 'search', 'app.component' e 'cart'.

5) Se si vuole, si può rendere più complicato il sistema di prenotazione stanze (aggiungere il controllo delle date prenotate per una stanza, se la stanza è libera, ecc).

6) Creato service AuthService che gestisce login/logout e visualizza la navbar 
   (Approfondimento: "Custom Directives"), gestendo anche il caso di server down (Approfondimento: "Angular Interceptor")

6.1) Creazione di una Custom Directive "LoginDirective" in cui inserire la direttiva
  "isAuthorized" nel template dell' app.component.html per far apparire la NavBar - 
   Se invece non si usa la "LoginDirective" controllare il login scommentando questo nel file app.component.html => <div class="navigation" *ngIf="authService.isLogged()">

7) Creazione di una Service di tipo "AuthGuard" usato con le rotte di "AppRoutingModule" per evitare di entrare su pagine interne senza essere loggati(es. al refresh di una pagina interna).



- 2 REFACTORING COMPONENT BASED
1) Refactoring del Componente "Search" creando vari Componenti:
  - "HotelList" per la lista di hotel
  - "HotelForm" per il form di ricerca degli hotel
  - "Separator"
  - "Gmap" per la mappa
  - "Rates" per la valutazione dell'hotel
  - "Stars" per le stelle dell'hotel
  - "Reservations" per la lista di camere di ogni hotel
  - "ImageGallery" per le immagini dell'hotel
  - "Services" per i servizi di un hotel
  - "ContactForm" per il form dei contatti
In tutti questi tramite la proprietà "Input()" passiamo dati dal Componente padre "Search" ai sotto-componenti, mentre con la proprietà "Output()" emettiamo un evento con "emit" che dal sotto-componente invia un qualcosa (una stringa o un oggetto) che verrà catturato nel componente padre tramite "$event".

2) Creazione di un Componente "app-card" contenente <div class="card...">, con il contentuto    passato dinamicamente tramite la funzione di "Content-Rejection" (tag <ng-content></ng-content>), che viene inserito nel template "search.component.html" per avvolgere i vari Sotto-Componenti.
In più siccome ogni <div class="card..."> può avere o no altre classi Css, queste vengono passate in maniera dinamica tramite il tag "@HostBinding" in cui si defininiscono le classi da applicare al nuovo Componente <app-card>.

- 3) MODULI E LAZY LOADING Divisione in moduli: 
     I moduli "features-login-login-module.js", "features-search-search-module.js" e "features-cart-cart-module.js"
     sono caricati dinamicamente dal browser(F12 -> Tab Network) nel momento in cui accedo alle rispettive pagine e non 
     al caricamento della prima pagina di Login.
     Il file "AppModule" diviene snello, importando solo "AppComponent", "AppRoutingModule", "SharedModule" e "CoreModule"

   - Creazione di 3 Moduli (CartModule, LoginModule e SearchModule) che gestiscono rispettivamente i Componenti "CartComponent, LoginComponent e SearchComponent".
     Questi moduli caricati in maniera "Lazy" vengono rimossi dall'import di "AppModule", definendo in essi 
     le regole di Routing. "CartModule" e "LoginModule" definiscono regole di Routing semplici (il Componente ed il path della url da caricare) =>
        RouterModule.forChild([
           {path: '', component: Component}
        ])
     mentre "SearchModule" gestisce le regole di Routing verso se stesso (SearchComponent) e verso un sotto-path "search/no-result" (NoResultComponent) nel file "SearchRoutingModule".

   - Il Modulo di Routing "SearchRoutingModule" gestisce le regole del routing per la componente "Search".
     Tale modulo di routing viene poi importato in "SearchModule".
     Il modulo "RouterModule" viene esportato da "SearchRoutingModule" all'esterno per fare in modo che tutti i Componenti dichiarati
     in "SearchModule" (come NoResultComponent) possano utilizzare le regole di routing.

   - Creazione di uno "Shared-module" in cui inserire i Componenti o Pipe comuni. Questo viene poi importato 
     nel modulo principale  "app-module" per poter essere utilizzabile ovunque nell'applicazione.

   - Creazione di un "core-module" in cui inserire il Componente della "Navbar". Il modulo viene poi importato 
     nel modulo principale "app-module", mentre il Componente "Navbar" viene inserito nel template principale "app-component.html"   