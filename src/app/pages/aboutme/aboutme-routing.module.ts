import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmePage } from './aboutme.page';

const routes: Routes = [
  {
    path: '',
    component: AboutmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutmePageRoutingModule {}
