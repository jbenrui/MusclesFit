import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipment } from '../../model/equipment';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.scss'],
})
export class EquipmentItemComponent implements OnInit {
  @Output() onUpdate = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() equipment:Equipment | undefined;
  constructor() { }

  ngOnInit() {}
  
  onUpdateClick(){
    this.onUpdate.emit(this.equipment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.equipment);
  }

}
