import { Podatek } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { Faktura, FakturaPodsumowanie } from '../model/item';
@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {
  faktura: Faktura;
  fakturaPodsumowanie: FakturaPodsumowanie;

  constructor() { }

  ngOnInit() {
    this.faktura = {
      dataSprzedazy: new Date(),
      pozycje: []
    };
    this.fakturaPodsumowanie = this.przeliczPodsumowanie(this.faktura);
  }
  przeliczPodsumowanie(faktura: Faktura): FakturaPodsumowanie {
    const brutto = this.round(faktura.pozycje.map(i => i.brutto).reduce((sum, i) => sum + i, 0), 2);
    const netto = this.round(faktura.pozycje.map(i => i.netto_rabat).reduce((sum, i) => sum + i, 0), 2);
    const podatek = this.round(brutto - netto, 2);
    return {
      brutto,
      netto,
      podatek
    };
  }
  private round(wartosc: number, cyfryZaokr: number): number {
    const zaokraglone = Number((Math.round(wartosc * 100) / 100).toFixed(cyfryZaokr));
    return zaokraglone;
  }
  zaktualizujPozycje(pozycje) {
    this.fakturaPodsumowanie = this.przeliczPodsumowanie(this.faktura);
  }

}
