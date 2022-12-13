import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import * as moment from 'moment';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-date-selectable',
  templateUrl: './date-selectable.component.html',
  styleUrls: ['./date-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class DateSelectableComponent implements OnInit {

  private moment:any = moment;

  selectedDateTime:string="";

  propagateChage = (_:any) => {} //Propaga los cambios al componente padre.

  isDisabled:boolean = false;

  constructor() { 
    this.selectedDateTime=this.moment().toISOString;
  }
  
  registerOnTouched(fn: any): void {
    
  }
  
  ngOnInit() {}

  writeValue(obj:any): void{
    this.selectedDateTime = obj;
  }

  registerOnChange(fn: any): void{
    this.propagateChage = fn;
  }

  setDisableState?(isDisabled:boolean){
    this.isDisabled = isDisabled;
  }

  getTime(){
    return this.selectedDateTime;
  }

  onDateTimeChanged(event:any, accordion:IonAccordionGroup){
    this.selectedDateTime = event.detail.value;
    accordion.value=[''];
    this.propagateChage(this.selectedDateTime);
  }

  onCancel(datetime:IonDatetime, accordion:any){
    datetime.cancel();
    accordion.value = [''];
  }
  onConfirm(datetime:IonDatetime){
    datetime.confirm();
  }

}
