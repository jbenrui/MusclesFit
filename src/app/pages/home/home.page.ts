import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { DiaryFormComponent } from 'src/app/core/components/diary-form/diary-form.component';
import { diaryWorkout } from 'src/app/core/model/diaryWorkout';
import { DiarySvcService } from 'src/app/core/services/diary-svc.service';
import { ScreenSizeSVCService } from 'src/app/core/services/screen-size-svc.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ScreenSizeWidth:number = this.ScreenSizeSVC.getScreenSizeWidth();

  //Size Plataforms
  PhoneWidth:number = 500;
  TabletWidth:number = 600;
  MonitorWidth:number = 1000;
  
  constructor(
    private ScreenSizeSVC:ScreenSizeSVCService,    
    private DiarySVC:DiarySvcService,
    private modal:ModalController,
    private alert:AlertController,
    private translate:TranslateService
    ) {}


  getScreenSize(){
    this.ScreenSizeWidth = this.ScreenSizeSVC.getScreenSizeWidth()
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

   getDiaryList(){
    return this.DiarySVC.diaryList$
   }

   async DiaryListForm (diary:diaryWorkout|null|undefined){
    const modal = await this.modal.create({
        component:DiaryFormComponent,
        componentProps:{
          diaryList:diary
        },
        cssClass:"modal-full-right-side"
    });
    modal.present();
      modal.onDidDismiss().then(result=>{
        if(result && result.data){
          switch(result.data.mode){
            case 'New':
              this.DiarySVC.addDiaryList(result.data.diary);
              break;
            case 'Edit':
              this.DiarySVC.updateDiaryList(result.data.diary);
              break;
            default:
          }
        }
      });
  }

  onAddDiaryList(){
    this.DiaryListForm(null);
  }
  
  onUpdateDiaryList(diary:diaryWorkout){
    this.DiaryListForm(diary);
  } 

async onDeleteAlert(diary:any){
  const alert = await this.alert.create({
    header: await lastValueFrom(this.translate.get('general.warning')),
    buttons: [
      {
        text: await lastValueFrom(this.translate.get('general.btn_cancel')),
        role: 'cancel',
        handler: () => {
          console.log("Operacion cancelada");
        },
      },
      {
        text: await lastValueFrom(this.translate.get('general.btn_delete')),
        role: 'confirm',
        handler: () => {
            this.DiarySVC.deleteDiaryListById(diary.id);
          
        },
      },
    ],
  });

  await alert.present();
  const { role } = await alert.onDidDismiss();

}

  onDeleteDiaryList(diary:diaryWorkout){
    this.onDeleteAlert(diary);
  }
}
