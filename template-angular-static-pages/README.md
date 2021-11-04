## Booking: static demo 

Questo progetto contiene:

* Le pagine "statiche" del progetto (HTML e CSS)
* Il webserver con le API REST che saranno utilizzate nel progetto

---

## Installazione

1) Apri il terminale nella root del progetto e installa le dipendenze usando il comando `npm install`

---

2) Avvia il webserver per visualizzare le pagine statiche: `npm run start`
Le pagine disponibili sono 

* http://127.0.0.1:8080/search.html
* http://127.0.0.1:8080/login.html
* http://127.0.0.1:8080/cart.html

---

3) Avvia il webserver REST: `npm run server`.

Avrai a disposizione le seguenti API:

**Search hotels list by text**

* http://localhost:3000/hotels?q=Milan
* http://localhost:3000/hotels?q=MILAn
* http://localhost:3000/hotels?q=MI

**Get hotel info by ID**

* http://localhost:3000/hotels/1
* http://localhost:3000/hotels/2

---

### Link utili

* [Ionicons](https://ionicons.com/)
* [json-server](https://github.com/typicode/json-server)
