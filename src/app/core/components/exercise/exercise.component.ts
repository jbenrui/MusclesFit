import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../../model/workout';
import { CategoryWorkoutSVCService } from '../../services/category-workout-svc.service';
import { EquipamentSVCService } from '../../services/equipament-svc.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {


  @Input() workout:Workout | undefined;
  @Output() onUpdate = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  constructor(
    private equipmentSVC : EquipamentSVCService,
    private categorySVC : CategoryWorkoutSVCService
  ) { }

  ngOnInit() {
    
  }

  getEquipmentById(id:number|undefined){
    if(id!=null)
      return this.equipmentSVC.getEquipmentById(id)?.name_equipment
    return {};

  }

  getCategoryById(id:number| undefined){
    if(id!=null)
      return this.categorySVC.getCategoryById(id)?.nameCategory
    return {};
  }

  onUpdateClick(){
    this.onUpdate.emit(this.workout);
  }

  onDeleteClick(){
    this.onDelete.emit(this.workout);
  }
    
}
