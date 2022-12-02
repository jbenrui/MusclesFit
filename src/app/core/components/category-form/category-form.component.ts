import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CategoryWorkout } from '../../model/categoryWorkout';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {

  form:FormGroup;
  mode: "New" | "Edit" = "New"; 

  
  @Input('category') set category(category:CategoryWorkout){
    if(category){
      this.form.controls['id'].setValue(category.id);
      this.form.controls['nameCategory'].setValue(category.nameCategory);
      this.form.controls['image'].setValue(category.image);
      this.mode = "Edit";
      
    }

  }
  constructor(private formBuilder:FormBuilder, 
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({
      id:[null],
      nameCategory:['',[Validators.required]],
      image:['']
    });
  }

  ngOnInit() {}

  onSubmit(){
    this.modal.dismiss({category: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(){
    this.modal.dismiss(null,'cancel');
  }

}
