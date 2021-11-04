# MyCatalog

 - CREAZIONE DI UN CATALOGO DI OGGETTI, INSERITI TRAMITE FORM E VISUALIZZABILI IN UNA LISTA SOTTOSTANTE

  1) Creazione progetto
  - Rest Api: GET/POST/PATCH/DELETE da un json-server che legge i valori dal file server/db.json
  - File "tslint.json":
     Aggiunta della riga seguente perchè l'Ide non segnali errori di sbazi bianchi -> "no-trailing-whitespace": false
     Dentro l'array "max-line-length" si specifica la lunghezza massima che può avere una riga in una classe;
  - Creazione Form con la "Template-Reference-Variable" #f e le direttiva "ngForm" ed "ngModel";
  - Implementare un CRUD di un elenco di oggetti;
 
  2) REFACTORING COMPONENT BASED
   - Creazione di Component-child <mc-catalog-list> che visualizza la lista di Oggetti
     e a cui sono passati gli attributi dal Component-parent <mc-catalog>, usando le 
     funzioni @Input() e @Ouput();
   - Creazione di un Component-child "<mc-catalog-form>" che visualizza la Form di inserimento
     degli Oggetti. 
     Da questa form quando verrà emesso un evento esso non sarà di tipo " (submit)='save(f)' "
     ma di tipo " (submit)='save(f.value)' ", ovvero verrà inviato verso il Componente padre "</mc-catalog>" il valore "f.value" - oggetto di chiavi-valore di tipo "Device"
     contenente solo i valori inviati dalla form - e non più l'intero form "f" di tipo
     "ngForm".
   - Creazione di Component-child "<'mc-os-icon>" e "<mc-os-price>" richiamabili dal
     parent "<mc-catalog-list>" i quali gestiscono le icone(ios o android) ed il 
     prezzo dei prodotti
   - OnChanges rileva il cambiamento delle proprietà @Input() come
     "activeDevice"  
   - ViewChild crea un riferimento ad un qualsiasi oggetto di tipo
     "Reference-Variable" del template, come #f per le Form, potendo così
     riferirsi alla Form tramite la referenza del "ViewChild" creata
     
  3) ORGANIZZAZIONE IN SERVICE E GESTIONE STATO APPLICATIVO
     - Logica di Business portata dentro il Service "CatalogService" 
     - Logica gestione stato applicativo/Store portata dentro "CatalogStore"
     - Creazione Componenti condivisi/shared come "<mc-card>" che ingloba i componenti della form e della lista di oggetti
     - Creazione di una Core/NavigationBar per cambiare sezione tramite "routerLink" definiti in "AppRoutingModule"