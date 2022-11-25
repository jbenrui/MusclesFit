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
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:2,
      name:"Incline Bench Press",
      id_category:1,
      id_equipment:9,
      image:"/assets/push/bench-press.jpg"
    },{
      id:3,
      name:"Dips",
      id_category:1,
      id_equipment:7,
      image:"/assets/push/bench-press.jpg"
    },
    //Shoulder Workout
    {
      id:4,
      name:"Arnold Press",
      id_category:3,
      id_equipment:3,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:5,
      name:"Military Over Head Press",
      id_category:3,
      id_equipment:1,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:6,
      name:"Side Lateral Raise",
      id_category:3,
      id_equipment:3,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:7,
      name:"Cable Face Pulls",
      id_category:3,
      id_equipment:11,
      image:"/assets/push/bench-press.jpg"
    },
    //Back Exercises
    {
      id:8,
      name:"Pull Ups",
      id_category:2,
      id_equipment:6,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:9,
      name:"Lat Pull",
      id_category:2,
      id_equipment:12,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:10,
      name:"Barbell-Row",
      id_category:2,
      id_equipment:1,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:11,
      name:"DeadLift Conventional",
      id_category:2,
      id_equipment:1,
      image:"/assets/push/bench-press.jpg"
    },
    //Legs Exercises
    {
      id:12,
      name:"Squat",
      id_category:4,
      id_equipment:13,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:13,
      name:"Hack Press",
      id_category:4,
      id_equipment:14,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:14,
      name:"Lying Femoral Curl",
      id_category:4,
      id_equipment:15,
      image:"/assets/push/bench-press.jpg"
    },
    {
      id:15,
      name:"Seated Leg Curl",
      id_category:4,
      id_equipment:15,
      image:"/assets/push/bench-press.jpg"
    }
  ];

  private workoutSubjetc:BehaviorSubject<Workout[]> = new BehaviorSubject(this._workout);
  public workout$ = this.workoutSubjetc.asObservable();

  id:number = this._workout.length+1;
  constructor() { }

  getWorkoutByCategory(id:number){
    this._workout.find(category => category.id_category == id)
  }

}
