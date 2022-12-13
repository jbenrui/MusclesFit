import { Component } from '@angular/core';
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
    private DiarySVC:DiarySvcService
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
}
