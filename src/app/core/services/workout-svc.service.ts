import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Workout } from '../model/workout';


@Injectable({
  providedIn: 'root'
})
export class WorkoutSVCService {

  private _workout : Workout[] = [

    //Chest Workout
    {
      id:1,
      name:"Bench Press",
      id_category:1,
      id_equipment:8,
      image:"/assets/workout/bench-press.jpg"
    },
    {
      id:2,
      name:"Incline Bench Press",
      id_category:1,
      id_equipment:9,
      image:"/assets/workout/incline-bench-press.jpg"
    },
    {
      id:3,
      name:"Dips",
      id_category:1,
      id_equipment:7,
      image:"/assets/workout/dips.jpg"
    },
    //Shoulder Workout
    {
      id:5,
      name:"Military Over Head Press",
      id_category:3,
      id_equipment:1,
      image:"/assets/workout/shoulder-press.jpg"
    },
    {
      id:6,
      name:"Side Lateral Raise",
      id_category:3,
      id_equipment:3,
      image:"/assets/workout/dumbbell-lateral-raise.jpg"
    },
    {
      id:7,
      name:"Cable Face Pulls",
      id_category:3,
      id_equipment:11,
      image:"/assets/workout/face-pull.jpg"
    },
    //Back Exercises
    {
      id:8,
      name:"Pull Ups",
      id_category:2,
      id_equipment:6,
      image:"/assets/workout/pull-ups.jpg"
    },
    {
      id:9,
      name:"Lat Pull",
      id_category:2,
      id_equipment:12,
      image:"/assets/workout/lat-pulldown.jpg"
    },
    //Legs Exercises
    {
      id:12,
      name:"Squat",
      id_category:4,
      id_equipment:13,
      image:"/assets/workout/squat.jpg"
    },
    {
      id:13,
      name:"Hack Press",
      id_category:4,
      id_equipment:14,
      image:"/assets/workout/hack-squat.jpg"
    },
    {
      id:14,
      name:"Lying Femoral Curl",
      id_category:4,
      id_equipment:15,
      image:"/assets/workout/lying-leg-curl.jpg"
    },
    {
      id:15,
      name:"Seated Leg Curl",
      id_category:4,
      id_equipment:15,
      image:"/assets/workout/seated-leg-curl.jpg"
    }
  ];

  private workoutSubjetc:BehaviorSubject<Workout[]> = new BehaviorSubject(this._workout);
  public workout$ = this.workoutSubjetc.asObservable();

  id:number = (this._workout.length)+1;
  constructor() { }

  getWorkoutByCategory(id:number){ //Filter by Category
    return this._workout.find(w => w.id_category == id);
  }

  getWorkoutById(id:number){
    return this._workout.find(w => w.id == id);
  }

  getWorkoutByEquipment(id:number){
    return this._workout.find(w => w.id_equipment == id);
  }

  deleteWorkoutById(id:number){
    this._workout = this._workout.filter(w=>w.id != id); 
    this.workoutSubjetc.next(this._workout); 
  }

  addWorkout(exercise:Workout){
    exercise.id = this.id++
    this._workout.push(exercise);
  }

  updateWorkout(exerciseItem:Workout){
    var _exercise = this._workout.find(exercise=>exercise.id == exerciseItem.id);
    if (_exercise){
      _exercise.name = exerciseItem.name
      _exercise.id_category = exerciseItem.id_category
      _exercise.id_equipment = exerciseItem.id_equipment
      _exercise.image = exerciseItem.image
    }
  }
}
