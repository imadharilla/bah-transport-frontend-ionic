import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransitResultatPageRoutingModule } from './transit-resultat-routing.module';

import { TransitResultatPage } from './transit-resultat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransitResultatPageRoutingModule
  ],
  declarations: [TransitResultatPage]
})
export class TransitResultatPageModule {}
