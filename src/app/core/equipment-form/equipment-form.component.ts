import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Equipment } from '../model/equipment';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.scss'],
})
export class EquipmentFormComponent implements OnInit {

  form:FormGroup;
  mode: "New" | "Edit" = "New"; 

  
  @Input('equipament') set equipament(equipament:Equipment){
    if(equipament){
      this.form.controls['id'].setValue(equipament.id);
      this.form.controls['name_equipment'].setValue(equipament.name_equipment);
      this.form.controls['image'].setValue(equipament.image);
      this.mode = "Edit";
      
    }

  }
  constructor(private formBuilder:FormBuilder, 
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({
      id:[null],
      name_equipment:['',[Validators.required]],
      image:['']
    });
  }

  ngOnInit() {}

  onSubmit(){
    this.modal.dismiss({equipament: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(){
    this.modal.dismiss(null,'cancel');
  }

}
