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
  TabletWidth:number = 600;
  MonitorWidth:number = 1000;
  constructor( 
    private ScreenSizeSVC : ScreenSizeSVCService
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

  ngOnInit() {
  }
}
