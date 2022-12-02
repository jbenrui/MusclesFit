import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutmePageRoutingModule } from './aboutme-routing.module';

import { AboutmePage } from './aboutme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutmePageRoutingModule
  ],
  declarations: [AboutmePage]
})
export class AboutmePageModule {}
