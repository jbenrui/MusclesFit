import { Component, OnInit } from '@angular/core';
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
    private workoutSVC : WorkoutSVCService
  ) { }

  ngOnInit() {
  }

  getWorkout(){
    return this.workoutSVC.workout$;
  }

  storeVar(value:number) {
    var amount = value;
    console.log(amount);
  } 

  getWorkoutByCategory(id:number){
    return this.workoutSVC.getWorkoutByCategory(id);
  }
}
