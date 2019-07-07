import { KlientBinding } from './../../fakturowanie/model/item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Klient } from 'src/app/fakturowanie/model/item';
import { FormularzTabelaService } from '../formularz-tabela.service';

@Component({
  selector: 'app-stworz-klienta',
  templateUrl: './stworz-klienta.component.html',
  styleUrls: ['./stworz-klienta.component.scss']
})
export class StworzKlientaComponent implements OnInit {
  public klient: Klient;
  @Input() public klienci: Klient[];
  // @Output() public zmianaKlienci = new EventEmitter<Klient[]>();

  constructor() { }

  ngOnInit() {
    this.pobierzZLocalStorage();
  }

  /*odbierzZListy($event: Klient) {
    this.klient.nazwa = $event.nazwa;
    this.klient.nip = $event.nip;
    this.klient.adres = $event.adres;

    this.klienci.push({
      nazwa: this.klient.nazwa,
      nip: this.klient.nip,
      adres: this.klient.adres
  });
    // this.zmianaKlienci.emit(this.klienci);
    console.log(this.klienci);
  }*/
  odbierzTabliceKlientow($event: Klient[]) {
    this.klienci = $event;
    console.log(this.klienci);
  }
  pobierzZLocalStorage() {
    if (localStorage.getItem('klientBinding') === null) {
      this.klienci = [];
    } else {
      this.klienci = JSON.parse(localStorage.getItem('klientBinding'));
    }
  }
  odbierzKlikKosza($event: Klient) {
    const tempID = this.klienci.findIndex(x => x.nip === $event.nip);
    this.klienci.splice(tempID, 1);
    console.log(this.klienci);
    localStorage.removeItem('klientBinding');
    localStorage.setItem('klientBinding', JSON.stringify(this.klienci));
    console.log(localStorage);
    // this.zmianaKlienci.next(this.klienci);
  }


}
