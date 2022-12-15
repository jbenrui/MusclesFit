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
      nameCategory:"Chest",
      image:"/assets/category/IconChest.jpg"
    },
    {
      id:2,
      nameCategory:"Back",
      image:"/assets/category/IconBack.jpg"
    },
    {
      id:3,
      nameCategory:"Arms",
      image:"/assets/category/IconArm.jpg"
    },
    {
      id:4,
      nameCategory:"Legs",
      image:"/assets/category/IconLegDay.jpg"
    },
    {
      id:5,
      nameCategory:"Shoulder",
      image:"/assets/category/IconShoulder.jpg"
    },
  ]
  private categorySubjetc:BehaviorSubject<CategoryWorkout[]> = new BehaviorSubject(this._category);
  public category$ = this.categorySubjetc.asObservable();

  id:number = (this._category.length)+1;

  constructor() { }

  getCategoryById(id:number){
    return this._category.find(_category => _category.id == id);
  }

  deleteCategorytById(id:number){
    this._category = this._category.filter(c=>c.id != id); 
    this.categorySubjetc.next(this._category); 
  }

  addCategory(category:CategoryWorkout){
    category.id = this.id++
    this._category.push(category)
  }

  updateCategory(categoryItem:CategoryWorkout){
    var _category = this._category.find(category=>category.id == categoryItem.id)
    if (_category){
      _category.nameCategory = categoryItem.nameCategory;
    }
  }

}
