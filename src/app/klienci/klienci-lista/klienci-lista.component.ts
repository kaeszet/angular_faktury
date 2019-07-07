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
  @Output() klikKosza = new EventEmitter<Klient>();
  // @Output() wyslijTabliceKlientow = new EventEmitter<Klient[]>();
  constructor() { }

  ngOnInit() {

  }
  usunKlienta() {
    console.log(this.klient);
    this.klikKosza.next(this.klient);
  }
  kopiuj() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.klient.nip;
    console.log(selBox.value);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
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
