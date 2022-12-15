import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeSVCService } from 'src/app/core/services/screen-size-svc.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.page.html',
  styleUrls: ['./aboutme.page.scss'],
})
export class AboutmePage implements OnInit {

  ScreenSizeWidth:number = this.ScreenSizeSVC.getScreenSizeWidth();

  PhoneWidth:number = 500;
  TabletWidth:number = 700;
  MonitorWidth:number = 1300;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor( 
    private ScreenSizeSVC : ScreenSizeSVCService
  ) {


    console.log(this.ScreenSizeWidth)
  }

  getScreenSize(){
    this.ScreenSizeWidth = this.ScreenSizeSVC.getScreenSizeWidth()
   }

   screenType():'BIG'|'SMALL'|'MEDIUM'{
      if (this.ScreenSizeWidth <= this.PhoneWidth){
        return 'SMALL'
      }else if (this.ScreenSizeWidth > this.TabletWidth && this.ScreenSizeWidth < this.MonitorWidth ){
        return 'MEDIUM'
      }else{
        return 'BIG';
      }
   }



  ngOnInit() {
  }
}
