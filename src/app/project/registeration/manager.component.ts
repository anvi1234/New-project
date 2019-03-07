import{Component, OnInit} from "@angular/core";
import{Router} from "@angular/router";
import{ActivatedRoute} from "@angular/router";
@Component({
    selector:"daycare-manager",
    templateUrl:'./manager.component.html',
    styleUrls:["./registeration.component.css"]
})
export class DaycareManager implements OnInit{
    link3="Call Us";
    link2="Register";
    link1="Sign in";
    h1="ves";
    h2="ti";
    h3="gio";
    title="DayCare Manager";
    title1="vestigio";
      item71="Sign In";   
      item72 ="Forget Password?"; 
      item73 = "Terms and Condition";   
      item74  ="Privacy and policy";
      item75="FAQ";
      item76="Contact";
      btn="Next Page";
    number: string;
   constructor(private routes:Router,private route:ActivatedRoute) {}
      go(){
          this.routes.navigate(['/nextpage','5']);
      }
     
        ngOnInit(){
            this.number=this.route.snapshot.paramMap.get("number");
        }
   
          Jobposition=["","Daycare Director","Administrative Assistant","Preschool Teacher","Teacher's Assistant"];
          state=["","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Himanchal Pradesh","Haryana","Jammu&Kashmir","Jharkhand","Karnataka","Kerla","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Benga"];

     }

