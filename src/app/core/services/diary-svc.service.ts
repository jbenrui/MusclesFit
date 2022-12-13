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
      weight:80,
      reps:8
    }
  ];

  private diarySubject:BehaviorSubject<diaryWorkout[]> = new BehaviorSubject(this._diaryList);
  public diaryList$ = this.diarySubject.asObservable();

  id:number = (this._diaryList.length)+1;

  constructor() { }

  deleteDiaryListById(id:number){
    this._diaryList = this._diaryList.filter(d=>d.id != id); 
    this.diarySubject.next(this._diaryList); 
  }

  addDiaryList(diary:diaryWorkout){
    diary.id = this.id++
    this._diaryList.push(diary);
  }

  updateDiaryList(diaryList:diaryWorkout){
    var _diary = this._diaryList.find(e=>e.id == e.id);
    if (_diary){
      _diary.idWorkout = diaryList.idWorkout
      _diary.dateWorkout = diaryList.dateWorkout
      _diary.weight = diaryList.weight
      _diary.reps = diaryList.reps
    }
  }

  getDiaryByIdWorkout(id:number){
    return this._diaryList.find(w => w.idWorkout == id);
  }

}
