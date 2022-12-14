import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Workout } from '../../model/workout';
import { WorkoutSVCService } from '../../services/workout-svc.service';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExerciseSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-exercise-selectable',
  templateUrl: './exercise-selectable.component.html',
  styleUrls: ['./exercise-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
  
})
export class ExerciseSelectableComponent implements OnInit {

  selectedExercise:Workout | undefined = {id:0,name:"", id_category:0,id_equipment:0,image:""};
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private workoutSVC: WorkoutSVCService
  ) { }


  writeValue(obj: any): void {
    this.selectedExercise = this.workoutSVC?.getWorkoutById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getWorkout():Observable<Workout[]>{
    return this.workoutSVC.workout$;
  } 

  onEquipmentClicked(workout:Workout, accordion:IonAccordionGroup){
    
    this.selectedExercise = workout;
    accordion.value='';
    this.propagateChange(this.selectedExercise.id);
  }
}
