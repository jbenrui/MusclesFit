import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyworkoutPageRoutingModule } from './dailyworkout-routing.module';

import { DailyworkoutPage } from './dailyworkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyworkoutPageRoutingModule
  ],
  declarations: [DailyworkoutPage]
})
export class DailyworkoutPageModule {}
