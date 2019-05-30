import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakturaComponent } from './fakturowanie/faktura/faktura.component';
import { HeroComponent } from './hero/hero/hero.component';

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'fakturowanie', component: FakturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
