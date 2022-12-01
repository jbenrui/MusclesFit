import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ExerciseFormComponent } from 'src/app/core/components/exercise-form/exercise-form.component';
import { Workout } from 'src/app/core/model/workout';
import { WorkoutSVCService } from 'src/app/core/services/workout-svc.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  public workout:Workout[] | undefined;
  constructor(
    private workoutSVC : WorkoutSVCService,
    private modal:ModalController,
    private alert:AlertController,
  ) { }

  ngOnInit() {
  }

  getWorkout(){
    return this.workoutSVC.workout$;
  }


  getWorkoutByCategory(id:number){
    return this.workoutSVC.getWorkoutByCategory(id);
  }

  async workoutForm (exercise:Workout|null|undefined){
    const modal = await this.modal.create({
        component:ExerciseFormComponent,
        componentProps:{
          exercise:exercise
        },
        cssClass:"modal-full-right-side"
    });
    modal.present();
      modal.onDidDismiss().then(result=>{
        if(result && result.data){
          switch(result.data.mode){
            case 'New':
              this.workoutSVC.addEquipment(result.data.equipament);
              break;
            case 'Edit':
              this.workoutSVC.updateEquipment(result.data.equipament);
              break;
            default:
          }
        }
      });
  }

  onNewWorkout(){
    this.workoutForm(null);
  }
}
