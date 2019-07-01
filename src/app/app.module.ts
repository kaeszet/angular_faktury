import { FormsModule } from '@angular/forms';
import { KlienciModule } from './klienci/klienci.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakturowanieModule } from './fakturowanie/fakturowanie.module';
import { NawigacjaComponent } from './layout/nawigacja/nawigacja.component';
import { HeroModule } from './hero/hero.module';



@NgModule({
  declarations: [
    AppComponent,
    NawigacjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    FakturowanieModule,
    KlienciModule,
    FormsModule
  ],
  exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
