import { StworzKlientaComponent } from './klienci/stworz-klienta/stworz-klienta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakturaComponent } from './fakturowanie/faktura/faktura.component';
import { HeroComponent } from './hero/hero/hero.component';

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'fakturowanie', component: FakturaComponent},
  {path: 'klienci', component: StworzKlientaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
