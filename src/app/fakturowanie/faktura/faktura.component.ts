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
    const brutto = faktura.pozycje.map(i => i.brutto).reduce((sum, i) => sum + i, 0);
    const netto = faktura.pozycje.map(i => i.netto).reduce((sum, i) => sum + i, 0);
    return {
      brutto,
      netto,
      podatek: this.round(brutto - netto, 2)
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
