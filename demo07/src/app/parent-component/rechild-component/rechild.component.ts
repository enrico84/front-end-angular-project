import {Component} from "@angular/core";
import {Utility} from "../../services/utility";

@Component({
    selector: 'rechild-component',
    template: `
        <h3>{{titolo}}</h3>
        <div>Data di oggi: {{miaData | date: 'dd MM yyyy'}}</div><br>
        <div>Soldi: {{soldi | currency: 'EUR':'symbol':'1.2-4'}}</div><br>
        <div>Percentuale: {{miaPercentuale | percent}}</div><br>
        <div>BitCoin: {{bitCoins | number: '2.2-4' }}</div><br>
        <pre>Json: {{mioJson | json}}</pre>
        <ul *ngFor = "let u of utenti">
        <li>{{u.nome}} {{u.cognome}} {{u.eta}}</li>
        </ul>
        <div>Capoluoghi:
            <span *ngFor="let r of regioni; index as i">
                {{r}}-{{r | pipeCustom}}<span *ngIf="i<2">, </span>
            </span>
        </div>
    `,
    styles: []
})
export class RechildComponent {
    utenti: User[];
    num1 = 5;
    num2 = 4;

    // Dependecy injection di un Service
    constructor(utils: Utility) {
      const result = utils.addizione(this.num1, this.num2);
      console.log("Service utility:: add : "+this.num1+ " + " +this.num2+ " = " +result);

      this.utenti = [
        {nome: "Ciccio", cognome: "Pasticcio", eta: 22},
        {nome: "Giulio", cognome: "Cesare", eta: 50},
        {nome: "Caio", cognome: "Sempronio", eta: 38}
      ];
    }

    titolo = "RechildComponent lavora";
    miaData = Date.now();
    soldi = 1.300;
    miaPercentuale= 0.44;
    bitCoins = 22.12345664;
    mioJson = {nome: "Gerardo", eta: 22, citta: "Milano"};

    regioni = ["Campania", "Lombardia", "Sicilia"];
}

export interface User {
  nome: string;
  cognome: string;
  eta: number;
}
