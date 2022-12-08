import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutmePageRoutingModule } from './aboutme-routing.module';

import { AboutmePage } from './aboutme.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutmePageRoutingModule,
    TranslateModule.forChild({
      loader:{ 
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]  
      }
    }),
  ],
  declarations: [AboutmePage]
})
export class AboutmePageModule {}
