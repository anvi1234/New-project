import {Component} from "@angular/core";
import { User } from "../dashboard.model";
import { DaycareService } from "src/app/daycare.service";
import { Router } from "@angular/router";


@Component({
    selector:"location",
    templateUrl:"./location.component.html",
    styleUrls:["./location.component.css"]
    
})

export class LocationComponent{
    image2:string="assets/image/daycare1.jpg";
    User: User=new User;
    constructor(private service:DaycareService,private router:Router){}
  
  saveData(){
    this.service.saveData(this.User).subscribe(y=>{
      if(y.userResponse.message!="warning"){
         this.router.navigate(['./dashboard/gallery']);
      }
      else{
          alert("y.userResponse.message");
      }
  })
  }
}