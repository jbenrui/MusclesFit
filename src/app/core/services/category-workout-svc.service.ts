import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryWorkout } from '../model/categoryWorkout';

@Injectable({
  providedIn: 'root'
})
export class CategoryWorkoutSVCService {
  private _category:CategoryWorkout[] = [ 
    {
      id:1,
      nameCategory:"Chest"
    },
    {
      id:2,
      nameCategory:"Back"
    },
    {
      id:3,
      nameCategory:"Arms"
    },
    {
      id:4,
      nameCategory:"Legs"
    },
  ]
  private categorySubjetc:BehaviorSubject<CategoryWorkout[]> = new BehaviorSubject(this._category);
  public category$ = this.categorySubjetc.asObservable();

  id:number = this._category.length+1;

  constructor() { }

  getCategoryById(id:number){
    return this._category.find(_category => _category.id == id);
  }

}
