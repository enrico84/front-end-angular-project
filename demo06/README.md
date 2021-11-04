# Demo06

- Argomenti lezione - Stili css globali - Dependency Injection di Servizi - Navigazione con Angular-router
1) Avviare il progetto sotto "localhost:4201" 
   Per cambiare la porta andare nel file angular.json -> projects -> architect - > serve -> options -> aggiungere "port": 4201  
2) Creare stili globali per i Componenti: nel file globale "styles.css" vengono definiti gli stili globali all'applicazione, 
   mentre nel file globale "angular.json" si iniettano nel tag "styles" questo file insieme alla dipendenza 
   di bootstrap scaricata da npm (bootstrap.min.css);
3) Creare un Servizio da command cli => mg g c services/myservice
   Questo crea un Servizio come un Singleton a livello di Root con specificato => providedIn: 'root' nella classe "MyService" creata
   Se non si vuole che il servizio sia un singleton, va rimosso il codice "providedIn" e quindi lo si aggiunge 
   manualmente ai providers nella classe "app.module.ts" - array "providers[]" - per un componente o un modulo caricato lazy.
   Qui si può anche scegliere nell'array "provider[]" se abbinare ad un Servizio una Classe di tipo Fake o una Reale, così da simulare
   un Componente fake in ambiente di Sviluppo ed un Componente reale in ambiente di Produzione;
4) Spostata la logica di GET/POST/EDIT/DELETE nel Servizio, ed il Componente richiama il servizio per eseguire le varie operazioni;
5) Creato un Servizio che setta dei valori, questo viene iniettato nei vari Component per recuperare valori. 
   Così la logica viene divisa tra settaggio di valori - SET - e recupero di valori - GET;  
6) Uso di Angular-router con "RouterModule.forRoot" per definire la navigazione.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
