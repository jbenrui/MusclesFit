import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbaoutPage } from './abaout.page';

const routes: Routes = [
  {
    path: '',
    component: AbaoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbaoutPageRoutingModule {}
