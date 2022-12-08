import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeSVCService } from 'src/app/core/services/screen-size-svc.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.page.html',
  styleUrls: ['./aboutme.page.scss'],
})
export class AboutmePage implements OnInit {

  screenHeight:number | undefined;
  screenWidth:number | undefined;
  constructor( 
    private ScreenSize : ScreenSizeSVCService
  ) { 
      this.screenHeight = ScreenSize.getScreenSizeHeight()
      this.screenWidth = ScreenSize.getScreenSizeWidth()
      console.log(this.screenHeight + " " + this.screenWidth)
  }

  ngOnInit() {
  }
}
