import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { ExerciseFormComponent } from 'src/app/core/components/exercise-form/exercise-form.component';
import { Workout } from 'src/app/core/model/workout';
import { DiarySvcService } from 'src/app/core/services/diary-svc.service';
import { WorkoutSVCService } from 'src/app/core/services/workout-svc.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  public workout!:Workout[];
  constructor(
    private workoutSVC : WorkoutSVCService,
    private DiarySVC:DiarySvcService,
    private modal:ModalController,
    private alert:AlertController,
    private translate : TranslateService
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
          workout:exercise
        },
        cssClass:"modal-full-right-side"
    });
    modal.present();
      modal.onDidDismiss().then(result=>{
        if(result && result.data){
          switch(result.data.mode){
            case 'New':
              this.workoutSVC.addWorkout(result.data.workout);
              break;
            case 'Edit':
              this.workoutSVC.updateWorkout(result.data.workout);
              break;
            default:
          }
        }
      });
  }

  onAddWorkout(){
    this.workoutForm(null);
  }
  
  onUpdateWorkout(workout:Workout){
    this.workoutForm(workout);
  } 

async onDeleteAlert(workout:any){
  const alert = await this.alert.create({
    header: await lastValueFrom(this.translate.get('general.warning')),
    buttons: [
      {
        text: await lastValueFrom(this.translate.get('general.btn_cancel')),
        role: 'cancel',
        handler: () => {
          console.log("Operacion cancelada");
        },
      },
      {
        text: await lastValueFrom(this.translate.get('general.btn_delete')),
        role: 'confirm',
        handler: () => {
            this.workoutSVC.deleteWorkoutById(workout.id);
          
        },
      },
    ],
  });

  await alert.present();
  const { role } = await alert.onDidDismiss();

}
async onWorkoutExistsAlert(workout:any){
  const alert = await this.alert.create({
    header: 'Error',
    message: await lastValueFrom(this.translate.get('general.exist')),
    buttons: [
      {
        text: await lastValueFrom(this.translate.get('general.btn_close')),
        role: 'close',
        handler: () => {
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
}

  onDeleteWorkout(workout:any){
    if(!this.DiarySVC.getDiaryByIdWorkout(workout.id)){
      this.onDeleteAlert(workout);
    }else{
      this.onWorkoutExistsAlert(workout);
    }
  }
}
