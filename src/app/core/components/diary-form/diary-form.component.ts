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

  
  @Input('diary') set workout(diary:diaryWorkout){
    if(diary){
      this.form.controls['id'].setValue(diary.id);
      this.form.controls['idWorkout'].setValue(diary.idWorkout);
      this.form.controls['dateWorkout'].setValue(diary.dateWorkout);
      this.form.controls['weight'].setValue(diary.weight);
      this.form.controls['reps'].setValue(diary.reps);
      
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
      weight:['',[Validators.required]],
      reps:['']
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
