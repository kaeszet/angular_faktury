import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakturaComponent } from './faktura/faktura.component';
import { FakturaPozycjaComponent } from './faktura-pozycja/faktura-pozycja.component';

@NgModule({
  declarations: [FakturaComponent, FakturaPozycjaComponent],
  imports: [
    CommonModule
  ],
  exports: [FakturaComponent]
})
export class FakturowanieModule { }
