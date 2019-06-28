import { AppRoutingModule } from './../app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroModule { }
