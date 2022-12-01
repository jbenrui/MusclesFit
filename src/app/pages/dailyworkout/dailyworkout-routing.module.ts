import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyworkoutPage } from './dailyworkout.page';

const routes: Routes = [
  {
    path: '',
    component: DailyworkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyworkoutPageRoutingModule {}
