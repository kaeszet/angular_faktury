
import { KlientComponent } from './../klienci/klient/klient.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StworzKlientaComponent } from './stworz-klienta/stworz-klienta.component';
import { KlienciListaComponent } from './klienci-lista/klienci-lista.component';


@NgModule({
  declarations: [StworzKlientaComponent, KlientComponent, KlienciListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class KlienciModule { }
