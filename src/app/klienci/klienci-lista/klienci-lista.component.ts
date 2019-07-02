import { Klient } from './../../fakturowanie/model/item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-klienci-lista, [app-klienci-lista]',
  templateUrl: './klienci-lista.component.html',
  styleUrls: ['./klienci-lista.component.scss']
})
export class KlienciListaComponent implements OnInit {

  @Input() public ID: number;
  @Input() public klient: Klient;
  // @Input() public klienci: Klient[];
  // @Output() messageEvent = new EventEmitter<Klient>();
  // @Output() wyslijTabliceKlientow = new EventEmitter<Klient[]>();
  constructor() { }

  ngOnInit() {

  }

/*
  odbierzZFormularza($event: Klient) {
    this.klient.nazwa = $event.nazwa;
    this.klient.nip = $event.nip;
    this.klient.adres = $event.adres;

    this.klienci.push({
      nazwa: this.klient.nazwa,
      nip: this.klient.nip,
      adres: this.klient.adres
    });
  }
  odbierzTabliceKlientow($event: Klient[]) {
    this.klienci = $event;
    console.log(this.klienci);
  }
*/

}
