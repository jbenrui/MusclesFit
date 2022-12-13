import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { diaryWorkout } from '../model/diaryWorkout';
import { Workout } from '../model/workout';

@Injectable({
  providedIn: 'root'
})
export class DiarySvcService {
  private _diaryList: diaryWorkout[] = [

    {
      id:1,
      idWorkout:1,
      dateWorkout:"12/12/2022",
      peso:80,
      repeticiones:8
    }
  ];

  private diarySubject:BehaviorSubject<diaryWorkout[]> = new BehaviorSubject(this._diaryList);
  public diaryList$ = this.diarySubject.asObservable();

  id:number = (this._diaryList.length)+1;

  constructor() { }

}
