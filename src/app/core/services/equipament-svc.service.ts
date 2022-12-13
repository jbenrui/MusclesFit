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
      name_equipment:"Barbell",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:8,
      name_equipment:"Bench",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:3,
      name_equipment:"Dumbbell",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:4,
      name_equipment:"Gym mat",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:9,
      name_equipment:"Incline bench",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:10,
      name_equipment:"Kettlebell",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:7,
      name_equipment:"none (bodyweight exercise)",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:6,
      name_equipment:"Pull-up bar",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:5,
      name_equipment:"Swiss Ball",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id:2,
      name_equipment:"SZ-Bar",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id: 11,
      name_equipment:"Pulley Ropes",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id: 12,
      name_equipment:"Lat Pull Bar",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id: 13,
      name_equipment:"Rack",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id: 14,
      name_equipment:"Hack Squat",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    },
    {
      id: 15,
      name_equipment:"Femoral Machine",
      image:"/assets/equipment/none_(bodyweight_exercise).webp"
    }
  ]
  private equipmentSubjetc:BehaviorSubject<Equipment[]> = new BehaviorSubject(this._equipment);
  public equipment$ = this.equipmentSubjetc.asObservable();

  id:number = (this._equipment.length)+1;

  constructor() { }
  getEquipmentById(id:number){
      return this._equipment.find(equipment => equipment.id == id);
  }

  deleteEquipmentById(id:number){
    this._equipment = this._equipment.filter(p=>p.id != id); 
    this.equipmentSubjetc.next(this._equipment); 
  }

  addEquipment(equipment:Equipment){
    equipment.id = this.id++
    this._equipment.push(equipment)
  }

  updateEquipment(equipmentItem:Equipment){
    var _equipment = this._equipment.find(equipment=>equipment.id == equipmentItem.id)
    console.log(_equipment)
    if (_equipment){
      _equipment.name_equipment = equipmentItem.name_equipment;
    }
  }
}

