import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CategoryWorkout } from '../../model/categoryWorkout';
import { CategoryWorkoutSVCService } from '../../services/category-workout-svc.service';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CategorySelectableComponent),
  multi: true
};

@Component({
  selector: 'app-category-selectable',
  templateUrl: './category-selectable.component.html',
  styleUrls: ['./category-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class CategorySelectableComponent implements OnInit, ControlValueAccessor {

  selectedCategory:CategoryWorkout | undefined = {id:0,nameCategory:"", image:""};
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private categorySVC: CategoryWorkoutSVCService
  ) { }


  writeValue(obj: any): void {
    this.selectedCategory = this.categorySVC?.getCategoryById(obj);
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

  getCategory():Observable<CategoryWorkout[]>{
    return this.categorySVC.category$;
  } 

  onCategoryClicked(category:CategoryWorkout, accordion:IonAccordionGroup){
    
    this.selectedCategory = category;
    accordion.value='';
    this.propagateChange(this.selectedCategory.id);
  }
}
