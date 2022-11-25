import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbaoutPageRoutingModule } from './abaout-routing.module';

import { AbaoutPage } from './abaout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbaoutPageRoutingModule
  ],
  declarations: [AbaoutPage]
})
export class AbaoutPageModule {}
