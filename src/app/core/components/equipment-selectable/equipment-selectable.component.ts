import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Equipment } from '../../model/equipment';
import { EquipamentSVCService } from '../../services/equipament-svc.service';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EquipmentSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-equipment-selectable',
  templateUrl: './equipment-selectable.component.html',
  styleUrls: ['./equipment-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class EquipmentSelectableComponent implements OnInit, ControlValueAccessor {

  selectedEquipment:Equipment | undefined = {id:0,name_equipment:"", image:""};
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private equipmentSVC: EquipamentSVCService
  ) { }


  writeValue(obj: any): void {
    this.selectedEquipment = this.equipmentSVC?.getEquipmentById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getEquipment():Observable<Equipment[]>{
    return this.equipmentSVC.equipment$;
  } 

  onEquipmentClicked(equipament:Equipment, accordion:IonAccordionGroup){
    
    this.selectedEquipment = equipament;
    accordion.value='';
    this.propagateChange(this.selectedEquipment.id);
  }
}
