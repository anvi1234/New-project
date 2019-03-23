import { Component } from "@angular/core";
import{Router} from "@angular/router";
import { DaycareService } from "../daycare.service";
import { User } from "./project.model";
@Component({
    selector: "sign-up",
    templateUrl: "./signup.component.html",
    styleUrls: ["./front.component.css"],
})
export class SignUpComponent {
    userData=[];
    User:User=new User();
    h1="Ba";
    h2="bb";
    h3="oo";
    constructor(private router:Router,private service:DaycareService){

    }

    saveData(){
        this.service.saveData(this.User).subscribe(y=>{
            if(y.userResponse.message!="warning"){
               this.router.navigate(['./frontpage']);
            }
            else{
                alert("y.userResponse.message");
            }
        })
    }

        
    }
  