
import { KlientComponent } from './../klienci/klient/klient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StworzKlientaComponent } from './stworz-klienta/stworz-klienta.component';

@NgModule({
  declarations: [StworzKlientaComponent, KlientComponent],
  imports: [
    CommonModule
  ]
})
export class KlienciModule { }
