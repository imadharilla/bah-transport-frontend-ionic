import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitPage } from './transit.page';

const routes: Routes = [
  {
    path: '',
    component: TransitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitPageRoutingModule {}
