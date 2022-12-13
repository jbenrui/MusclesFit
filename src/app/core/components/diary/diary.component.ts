import { Component, Input, OnInit } from '@angular/core';
import { diaryWorkout } from '../../model/diaryWorkout';
import { CategoryWorkoutSVCService } from '../../services/category-workout-svc.service';
import { ScreenSizeSVCService } from '../../services/screen-size-svc.service';
import { WorkoutSVCService } from '../../services/workout-svc.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
})
export class DiaryComponent implements OnInit {
  @Input() diary!:diaryWorkout;
  constructor(

    private workoutSVC:WorkoutSVCService,
    private categorySVC:CategoryWorkoutSVCService,
    private screenSizeSVC:ScreenSizeSVCService

  ) { }

    
  getWorkoutNameById(id:number | undefined){
    if(id!=null){
      return this.workoutSVC.getWorkoutById(id)?.name;
    }
    return{}
    
  }
  getWorkoutImageById(id:number | undefined){
    if(id!=null){
      return this.workoutSVC.getWorkoutById(id)?.image;
    }
    return{}
    
  }

  getCategoryById(id:number | undefined){
    if(id!=null){
      var idCategoria = this.workoutSVC.getWorkoutById(id)?.id_category;
      return this.categorySVC.getCategoryById(idCategoria!)?.nameCategory;
    }
    return{}
    
  }

  //Size Plataforms
  PhoneWidth:number = 500;
  TabletWidth:number = 600;
  MonitorWidth:number = 1000;

  ScreenSizeWidth:number = this.screenSizeSVC.getScreenSizeWidth()

  getScreenSize(){
    this.ScreenSizeWidth = this.screenSizeSVC.getScreenSizeWidth()
   }

   screenType():'BIG'|'SMALL'{
      if (this.ScreenSizeWidth <= this.PhoneWidth){
        return 'SMALL'
      }else if (this.ScreenSizeWidth > this.TabletWidth && this.ScreenSizeWidth < this.MonitorWidth ){
        return 'BIG'
      }else{
        return 'BIG';
      }
   }

  ngOnInit() {}

}
