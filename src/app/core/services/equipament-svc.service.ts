import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Equipment } from '../model/equipment';



@Injectable({
  providedIn: 'root'
})
export class EquipamentSVCService {
  private _equipment:Equipment[] = [ 
    {
      id:1,
      name_equipment:"Barbell"
    },
    {
      id:8,
      name_equipment:"Bench"
    },
    {
      id:3,
      name_equipment:"Dumbbell"
    },
    {
      id:4,
      name_equipment:"Gym mat"
    },
    {
      id:9,
      name_equipment:"Incline bench"
    },
    {
      id:10,
      name_equipment:"Kettlebell"
    },
    {
      id:7,
      name_equipment:"none (bodyweight exercise)"
    },
    {
      id:6,
      name_equipment:"Pull-up bar"
    },
    {
      id:5,
      name_equipment:"Swiss Ball"
    },
    {
      id:2,
      name_equipment:"SZ-Bar"
    },
    {
      id: 11,
      name_equipment:"High Pulley Row"
    },
    {
      id: 12,
      name_equipment:"Lat Pull Bar"
    },
    {
      id: 13,
      name_equipment:"Rack"
    },
    {
      id: 14,
      name_equipment:"Hack Squat"
    },
    {
      id: 15,
      name_equipment:"Femoral Machine"
    }
  ]
  private equipmentSubjetc:BehaviorSubject<Equipment[]> = new BehaviorSubject(this._equipment);
  public equipment$ = this.equipmentSubjetc.asObservable();

  id:number = this._equipment.length+1;

  constructor() { }
  getEquipmentById(id:number){
      return this._equipment.find(equipment => equipment.id == id);
  }
}

