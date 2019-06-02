import { Autocomplete } from './../model/autocomplete/autocomplete';
import { PrzelicznikCeny, CenaPozycji } from './../model/przelicznik-ceny/przelicznik-ceny';
import { FakturaPozycja, Jednostka, Podatek } from './../model/item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AutocompleteCatalog } from '../model/autocomplete/autocomplete-catalog';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, tap, map, retry} from 'rxjs/operators';

interface AutocompleteSuggestion {
  name: string;
  label: string;
}


@Component({
  selector: 'app-pojedyncza-pozycja',
  templateUrl: './pojedyncza-pozycja.component.html',
  styleUrls: ['./pojedyncza-pozycja.component.scss']
})
export class PojedynczaPozycjaComponent implements OnInit {

  readonly czasOczekiwaniaPrzedSzukaniem = 400;

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
  private szukajQuery = new Subject<string>();
  private szukajWynik = this.szukajQuery.pipe(
    debounceTime(this.czasOczekiwaniaPrzedSzukaniem),
    switchMap( q => this.autoCompletesCatalog.items(q)),
    tap(data => console.log(data)),
    map(data => this.zmianaFormatu(data)),
    tap(data => console.log(data)),
    retry(3)

  );

  sugestie: AutocompleteSuggestion[] = [];

  constructor(
    private przelicznikCeny: PrzelicznikCeny,
    private autoCompletesCatalog: AutocompleteCatalog
  ) {}

  ngOnInit() {
    this.pozycja = {
      ...this.pozycja,
      podatek: Podatek.podat_23
    };
    this.szukajWynik.subscribe((items) => {
      this.sugestie = items;
    });

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

  przechwycAutocomplete($event: any): void {
    this.szukajQuery.next($event.target.value);
  }

  zmianaFormatu(data: Autocomplete[]): AutocompleteSuggestion[] {
    return data.map( i => {
      return {
        name: i.nazwa,
        label: i.nazwa
      };
    });
  }

  wyborSugestii(item: AutocompleteSuggestion): void {
    this.pozycja = {
      ...this.pozycja,
      nazwa: item.name
    };
    this.sugestie = [];
  }
}
