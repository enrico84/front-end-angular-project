# Demo13AngularModule

Argomenti:
1) 
  - Applicazione modulare divisa in Moduli e sotto-componenti

2) 
  - Creazione di moduli figli importati in "app.module.ts" (CatalogModule, LoginModule, ContactsModule) 
    Dentro i moduli figli vengono dichiarati i propri Componenti (CatalogComponent, ContactsComponent, LoginComponent)

3) 
  - Condividere un modulo(SharedModule) ed esportare un suo componente all'esterno (AlertComponent)

4) 
  - Applicare il Lazy loading per il caricamento dei moduli - vedere il file "app-routing.module.ts" ed i vari sotto-moduli
    che caricano i propri Components.
    Eliminare dal file "app.module", precisamente dall'array "imports[]", i riferimenti ai moduli a cui viene applicato il lazy-loading.
    Nei singoli sotto-moduli, precisamente nell'array "RouterModule.forChild([])", specificare le rotte collegate ai vari components da caricare

5) 
  - Navigazione tra moduli e rotte di secondo livello (CatalogComponent --> NoResultComponent)
  - Definizione di "Routing Children" 
   (da LoginModule --> children: [
          {path:'signin', component: SigninComponent},
          {path:'lostpass', component: LostpassComponent},
          {path:'registration', component: RegistrationComponent},
          {path:'', redirectTo: 'signin'},
   ])

6)
  - Uso file "environments.ts" ed "environments.prod.ts"

7) 
 - Creare la Build del progetto:
   Creare la build del progetto => npm run build OPPURE ng build --prod
   Installare un web server "globalmente" su cui far girare l'applicazione Angular buildata =>
   npm install http-server -g
   Lanciare il server dalla cartella dist/my_project: http-server 
   Lanciare il pacchetto Buildato in locale dal browser => http://127.0.0.1/8080

   - Build ottimizzata:
      Abilitare il tree-shaking ed ottimizzare la build del progetto => Nel file "package.json" aggiungere "--prod" 
      nel Json "scripts": { "build": "ng build --prod" }
      Il file "vendor.js", che è il più pesante, scompare dalla build mentre il file "main.js" si ingrandisce
      ed in totale si avrà un progetto, in questo caso, di 300 KB scarsi.

   - Deploy progetto su https://surge.sh
     https://medium.com/@nioperas06/deploy-angular-apps-to-surge-7ee763db2235
     Installare globalmente il tool "Surge" => npm install --global surge
     Avviare il tool digitando il comando => surge
     Verrà chiesta email e password(anche alla prima registrazione) =>  
         email: enrico8484@gmail.com
         password: c.....84
     Verrà chiesta la root del progetto (la build del progetto /dist/my_project) =>
         project: C:\Users\CAPONEE\Documents\Progetti\Angular-app\demo13-angular-module\dist\my_project
     Dare la url del progetto che si desidera pubblicare => 
         domain: https://enricocapone-demo13-prod.surge.sh/
     Andare quindi su http://https://enricocapone-demo13-prod.surge.sh  per vedere l'applicazione pubblicata online

     ------------------------------------------------------------------------------------------------------------------------

# Docker compose use:
$ docker-compose build # for first build
$ docker-compose up
