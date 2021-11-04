# Demo04

Argomenti lezione: 
1) Installare la libreria json server per simulare un server http
2) Nel file db.json si creano gli end-point
3) Aggiungere nel file package.json la dipendenza solo "localmente" al json-server: nell'array "scripts" il comando => "server": "json-server --watch server/db.json" 
4) Avviare il mock-server aprendo un secondo terminale e digitare => npm run-scripts server => si vedranno gli endpoint creati 'http://localhost:3000/...'
5) I metodi http in Angular si inseriscono in un "service", per ora li inseriamo nel costruttore della classe AppComponent per tutorial 


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
