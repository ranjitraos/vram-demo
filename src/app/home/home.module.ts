import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { Card1Component } from './card1/card1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, CardComponent, Card2Component, Card1Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
