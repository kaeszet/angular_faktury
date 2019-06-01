import { PrzelicznikCeny, CenaPozycji } from './../model/przelicznik-ceny/przelicznik-ceny';
import { FakturaPozycja, Jednostka, Podatek } from './../model/item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pojedyncza-pozycja',
  templateUrl: './pojedyncza-pozycja.component.html',
  styleUrls: ['./pojedyncza-pozycja.component.scss']
})
export class PojedynczaPozycjaComponent implements OnInit {

  @Input()
  private pozycja: FakturaPozycja;
  @Input()
  private lp: number;
  private dostepneJednostki: Jednostka[] = [
    Jednostka.sztuka,
    Jednostka.godzina,
    Jednostka.usluga
  ];
  private dostepneStawkiPodatku: Podatek[] = [
    Podatek.podat_23,
    Podatek.podat_8,
    Podatek.podat_5
  ];
  @Output()
  private pozycjaUsunieta: EventEmitter<FakturaPozycja> = new EventEmitter<FakturaPozycja>();
  constructor(
    private przelicznikCeny: PrzelicznikCeny
  ) {}

  ngOnInit() {
    this.pozycja = {
      ...this.pozycja,
      podatek: Podatek.podat_23
    };

  }
  usunPozycje(): void {
    this.pozycjaUsunieta.next(this.pozycja);
  }

  private zaktualizujWZaleznosciOdWyniku(wynik: CenaPozycji) {
    this.pozycja = {
      ...this.pozycja,
      brutto: wynik.brutto,
      netto: wynik.netto
    };
  }

  przechwycZmianeBrutto(): void {
    const wynik = this.przelicznikCeny.oblicz({
      netto: null,
      brutto: this.pozycja.brutto,
      podatek: this.pozycja.podatek
    });
    this.zaktualizujWZaleznosciOdWyniku(wynik);
  }

  przechwycZmianeNetto(): void {
    const wynik = this.przelicznikCeny.oblicz({
      netto: this.pozycja.netto,
      brutto: null,
      podatek: this.pozycja.podatek
    });
    this.zaktualizujWZaleznosciOdWyniku(wynik);
  }

  przechwycZmianePodatku(): void {
    const wynik = this.przelicznikCeny.oblicz({
      netto: this.pozycja.netto,
      brutto: this.pozycja.brutto,
      podatek: this.pozycja.podatek,
    });
    this.zaktualizujWZaleznosciOdWyniku(wynik);
  }
}
