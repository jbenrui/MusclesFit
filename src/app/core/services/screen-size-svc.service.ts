import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeSVCService {
  constructor() {}

  @HostListener('window:resize', ['$event'])
  getScreenSizeHeight(event?:any) {
    return window.innerHeight;
    
  }
  @HostListener('window:resize', ['$event'])
  getScreenSizeWidth(event?:any) {
    return window.innerWidth;
    
  }
  
}
