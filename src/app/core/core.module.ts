import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExerciseComponent } from './exercise/exercise.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';
import { EquipmentItemComponent } from './equipment-item/equipment-item.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';



@NgModule({
  imports: 
  [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),//Indica que va a ser inyectado hacia la raiz de los modulos.
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader:{ 
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]  
      }
    }),
  ],
  exports:
  [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseComponent,
    EquipmentItemComponent,
    EquipmentFormComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations:[
    ExerciseComponent,
    EquipmentItemComponent,
    EquipmentFormComponent
  ]

})

export class CoreModule {}