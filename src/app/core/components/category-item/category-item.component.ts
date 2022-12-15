import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryWorkout } from '../../model/categoryWorkout';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {

  @Input() category!:CategoryWorkout;
  @Output() onUpdate = new EventEmitter
  @Output() onDelete = new EventEmitter;

  constructor() { }

  ngOnInit() {}

  onUpdateClick(){
    this.onUpdate.emit(this.category);
  }

  onDeleteClick(){
    this.onDelete.emit(this.category);
  }

}
