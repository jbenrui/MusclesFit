import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';
import { EquipmentItemComponent } from './components/equipment-item/equipment-item.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';
import { ExerciseFormComponent } from './components/exercise-form/exercise-form.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { EquipmentSelectableComponent } from './components/equipment-selectable/equipment-selectable.component';
import { CategorySelectableComponent } from './components/category-selectable/category-selectable.component';



@NgModule({
  imports: 
  [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
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
    EquipmentSelectableComponent,
    EquipmentItemComponent,
    EquipmentFormComponent,
    ExerciseFormComponent,
    ReactiveFormsModule,
    HttpClientModule,
    CategoryItemComponent,
    CategoryFormComponent,
    CategorySelectableComponent
  ],
  declarations:[
    ExerciseComponent,
    EquipmentItemComponent,
    EquipmentFormComponent,
    EquipmentSelectableComponent,
    ExerciseFormComponent,
    CategoryItemComponent,
    CategoryFormComponent,
    CategorySelectableComponent
  ]

})

export class CoreModule {}