import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakturaComponent } from './faktura/faktura.component';
import { FakturaPozycjaComponent } from './faktura-pozycje/faktura-pozycja.component';
import { PojedynczaPozycjaComponent } from './pojedyncza-pozycja/pojedyncza-pozycja.component';
import { FormsModule } from '@angular/forms';
import { PrzelicznikCeny } from './model/przelicznik-ceny/przelicznik-ceny';


@NgModule({
  declarations: [FakturaComponent, FakturaPozycjaComponent, PojedynczaPozycjaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FakturaComponent],
  providers: [
    {
      provide: PrzelicznikCeny, useFactory: () => new PrzelicznikCeny()
    }
  ]
})
export class FakturowanieModule { }
