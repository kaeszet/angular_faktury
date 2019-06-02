import { LocalAutocompleteCatalog } from './model/autocomplete/local-autocomplete-catalog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakturaComponent } from './faktura/faktura.component';
import { FakturaPozycjaComponent } from './faktura-pozycje/faktura-pozycja.component';
import { PojedynczaPozycjaComponent } from './pojedyncza-pozycja/pojedyncza-pozycja.component';
import { FormsModule } from '@angular/forms';
import { PrzelicznikCeny } from './model/przelicznik-ceny/przelicznik-ceny';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteCatalog } from './model/autocomplete/autocomplete-catalog';


@NgModule({
  declarations: [FakturaComponent, FakturaPozycjaComponent, PojedynczaPozycjaComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [FakturaComponent],
  providers: [
    {
      provide: PrzelicznikCeny, useFactory: () => new PrzelicznikCeny()
    },
    {
      provide: AutocompleteCatalog, useFactory: () => new LocalAutocompleteCatalog()
    }
  ]
})
export class FakturowanieModule { }
