import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExerciseComponent } from './exercise/exercise.component';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  imports: 
  [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),//Indica que va a ser inyectado hacia la raiz de los modulos.
    ReactiveFormsModule,
    PipesModule
  ],
  exports:
  [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseComponent,
    ReactiveFormsModule
  ],
  declarations:[
    ExerciseComponent
  ]

})

export class CoreModule {}