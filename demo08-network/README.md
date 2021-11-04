# Demo08Network

# Readme
1) Installato bootstrap e aggiunto al file "angular.json" sotto l'array degli stili "styles[]";
2) Abilitati alcuni flag dello "strict-mode" nel file "tsconfig.json", nella proprietà "angularCompilerOptions"
  per avere un aiuto in fase di compilazione;
3) Creati 3 Componenti
4) Il progetto è stato creato per gestire il Routing tramite il file "app-routing.module.ts" in cui vengono definite le 
5) Creare una versione build per l'ambiente di Produzione => ng build --prod
   Creerà la versione di build sotto la cartella "dist" con i file minimizzati .JS, .CSS e gli assets. 
   Si può pubblicare l'applicazione compilata sia sotto un server NodeJs che in locale sotto un server statico Apache,
   sotto la cartella http-docs del server Apache. 
   Nel file index.html modificare il <base href="/"> inserendo come href il nome della cartella in cui viene deployata l'app,
   il quale rappresenta il nostro path di partenza.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

