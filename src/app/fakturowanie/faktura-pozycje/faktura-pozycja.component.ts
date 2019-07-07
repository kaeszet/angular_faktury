import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FakturaPozycja, FakturaPozycjaFabryka} from '../model/item';


@Component({
  selector: 'app-faktura-pozycja',
  templateUrl: './faktura-pozycja.component.html',
  styleUrls: ['./faktura-pozycja.component.scss']
})
export class FakturaPozycjaComponent implements OnInit {
  @Input()
  public pozycje: FakturaPozycja[];
  @Output()
  pozycjeZmienione: EventEmitter<FakturaPozycja[]> = new EventEmitter();

  private fakturaPozycjaFabryka: FakturaPozycjaFabryka;
  public nrFaktury: string;
  private data: string;
  public czyZapisane = false;

  constructor() {
    this.fakturaPozycjaFabryka = new FakturaPozycjaFabryka();
  }

  ngOnInit() {
  }
  dodajPozycje(): void {
    this.pozycje.push(this.fakturaPozycjaFabryka.nowaFakturaPozycja());
    this.pozycjeZmienione.next(this.pozycje);
  }
  usunPozycje(pozycja: FakturaPozycja): void {
    const tempID = this.pozycje.findIndex(x => x.id === pozycja.id);
    this.pozycje.splice(tempID, 1);
    // this.pozycje = this.pozycje.filter(p => p.id !== pozycja.id);
    this.pozycjeZmienione.next(this.pozycje);
  }
  przechwycZmianePozycji(pozycja: FakturaPozycja): void {
    this.pozycjeZmienione.next(this.pozycje);
  }
  zapiszFakture(): void {
    this.czyZapisane = true;
    this.data = Date.now().toString();
    this.nrFaktury = `Fakt/${this.data}`;
    console.log(this.nrFaktury);
    window.print();
  }

}
