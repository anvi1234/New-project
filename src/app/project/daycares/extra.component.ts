import{Component,OnInit} from "@angular/core";

@Component({
    selector:"extra-page",
    templateUrl:"./extra.component.html",
    styleUrls: ["./extra.component.css"]
})
export class ExtraComponent implements OnInit{
  public millimagesUrl
    public menucontainer:boolean=false;
    constructor(){}
    ngOnInit(){
    
      this.millimagesUrl = [
          "assets/image/millenium/m1.jpg",
          "assets/image/millenium/m2.jpg",
          "assets/image/millenium/m3.jpg",
          "assets/image/millenium/m4.jpg",
          "assets/image/millenium/m5.jpg",
          "assets/image/millenium/m6.jpg",
          "assets/image/millenium/m7.jpg",
          "assets/image/millenium/m8.jpg",
          "assets/image/millenium/m9.jpg",
          "assets/image/millenium/m10.jpg",
          "assets/image/millenium/m11.jpg",
          "assets/image/millenium/m12.jpg",
          "assets/image/millenium/m13.jpg",
          "assets/image/millenium/m14.jpg",
          
      ];
}
 name=['sadgdsh','dshghs','sdhsjkdj'];
clickEvent(){
   this.menucontainer!=this.menucontainer;
}
}

$(document).ready( function() {
  
  $('.menu-header').click(function(e){
    e.stopPropagation();
   if ($(this).hasClass('active')){
     $('.menu-container').fadeOut(200);
     $(this).removeClass('active');
   } else {
     $('.menu-container').delay(300).fadeIn(200);
     $(this).addClass('active');
   }
 });

   
 function closeMenu(){
   $('.menu-container').fadeOut(200);
   $('.menu-header').removeClass('active');  
 }
   
 $(document.body).click( function(e) {
      closeMenu();
 });
 
 $(".menu-container").click( function(e) {
     e.stopPropagation();
 });
 });
 



