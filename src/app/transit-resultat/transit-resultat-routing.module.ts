import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitResultatPage } from './transit-resultat.page';

const routes: Routes = [
  {
    path: '',
    component: TransitResultatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitResultatPageRoutingModule {}
