# Demo05

Argomenti lezione: 
1) Avviare il progetto sotto "localhost:4201" 
   Per cambiare la porta andare nel file angular.json -> projects -> architect - > serve -> options -> aggiungere "port": 4201  
2) Nel file db.json si creano gli end-point
3) Creare un componente => 
  - Modo 1: ng generate component cartella/nome_componente
  - Modo 2 abbreviato: ng g c cartella/nome_componente
4) Nel file tsconfig.json abilitazione dello "strict-mode" nel flag "angularCompilerOptions" con le varie opzioni, 
   così da avere un aiuto  in fase di compilazione. Per creare un progetto con strict abilitato => ng new --strict 
5) Uso di Angular-router con "RouterModule.forRoot" per definire la navigazione
   Creare un modulo di Routing: ng g m app-routing -m=app.module --flat true --skip-tests
6) Introduzione a "rxjs" sull'oggetto Router

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
