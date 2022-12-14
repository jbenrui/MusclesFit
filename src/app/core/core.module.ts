import {LOCALE_ID, NgModule} from '@angular/core'
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { DateSelectableComponent } from './components/date-selectable/date-selectable.component';
import { ExerciseSelectableComponent } from './components/exercise-selectable/exercise-selectable.component';
import { DiaryComponent } from './components/diary/diary.component';
import { DiaryFormComponent } from './components/diary-form/diary-form.component';
import es  from '@angular/common/locales/es';
import en  from '@angular/common/locales/en';

registerLocaleData(en);
registerLocaleData(es);

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
  providers:[
    {
      provide: LOCALE_ID,
     useValue: 'es'
    }
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
    CategorySelectableComponent,
    DateSelectableComponent,
    ExerciseSelectableComponent,
    DiaryComponent,
    DiaryFormComponent,
  ],
  declarations:[
    ExerciseComponent,
    EquipmentItemComponent,
    EquipmentFormComponent,
    EquipmentSelectableComponent,
    ExerciseFormComponent,
    CategoryItemComponent,
    CategoryFormComponent,
    CategorySelectableComponent,
    DateSelectableComponent,
    ExerciseSelectableComponent,
    DiaryComponent,
    DiaryFormComponent,
  ]

})

export class CoreModule {}