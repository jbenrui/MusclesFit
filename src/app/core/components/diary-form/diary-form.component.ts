import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { diaryWorkout } from '../../model/diaryWorkout';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.scss'],
})
export class DiaryFormComponent implements OnInit {

  form:FormGroup ;
  mode: "New" | "Edit" = "New"; 

  
  @Input('diaryList') set diaryList(diaryList:diaryWorkout){
    if(diaryList){
      this.form.controls['id'].setValue(diaryList.id);
      this.form.controls['idWorkout'].setValue(diaryList.idWorkout);
      this.form.controls['dateWorkout'].setValue(diaryList.dateWorkout);
      this.form.controls['weight'].setValue(diaryList.weight);
      this.form.controls['reps'].setValue(diaryList.reps);
      
      this.mode = "Edit";
      
    }

  }
  constructor(private formBuilder:FormBuilder, 
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({
      id:[null],
      idWorkout:['',[Validators.required]],
      dateWorkout:['',[Validators.required]],
      weight:[''],
      reps:['',[Validators.required]]
    });
  }

  ngOnInit() {}

  onSubmit(){
    this.modal.dismiss({diary: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(){
    this.modal.dismiss(null,'cancel');
  }

}
