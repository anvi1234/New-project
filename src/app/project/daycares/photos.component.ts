import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector:"photos-page",
    templateUrl:"./photos.component.html",
    styleUrls: ["./daycare.component.css"],
    providers:[NgbCarouselConfig ]
})
export class PhotosComponent{
    title1="photos";
    title2="facility";
    title3="location";
    title4="reviews";
 

    constructor(config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.interval = 2000;
      config.wrap = true;
      config.keyboard = false;
      config.pauseOnHover = false;
    }
  
    
    
    
    
}