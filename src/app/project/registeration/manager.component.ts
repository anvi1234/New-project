import{Component, OnInit} from "@angular/core";
import{Router} from "@angular/router";
import{ActivatedRoute} from "@angular/router";
import { DaycareService } from "src/app/daycare.service";
import { User, JobPosition, State } from "../project.model";

@Component({
    selector:"daycare-manager",
    templateUrl:'./manager.component.html',
    styleUrls:["./registeration.component.css"]
})
export class DaycareManager implements OnInit{
    User:User=new User;
    JobPosition:JobPosition=new JobPosition;
    State:State=new State;
    link3="Call Us";
    link2="Register";
    link1="Sign in";
    h1="Ba";
    h2="bb";
    h3="oo";
    title="DayCare Manager";
    title1="Babboo";
      item71="Sign In";   
      item72 ="Forget Password?"; 
      item73 = "Terms and Condition";   
      item74  ="Privacy and policy";
      item75="FAQ";
      item76="Contact";
      btn="Submit";
    number: string;
   constructor(private router:Router,private route:ActivatedRoute,private service:DaycareService) {}

   saveData(){
    this.service.saveData(this.User).subscribe(y=>{
        if(y.userResponse.message!="warning"){
           this.router.navigate(['./dashboard']);
        }
        else{
            alert("y.userResponse.message");
        }
    })
}
      go(){
          this.router.navigate(['./dashboard']);
      }
     
        ngOnInit(){
            this.number=this.route.snapshot.paramMap.get("number");
        }
   
        
   
          Jobposition:JobPosition[]=[
             {jobid:1,jobname:"Daycare Director"},
             {jobid:2,jobname:"Administrative Assistant"},
             {jobid:3,jobname:"Preschool Teacher"},
             {jobid:4,jobname:"Daycare Director"},
             {jobid:5,jobname:"Teacher's Assistant"},


         ];
   
     
         state:State[]=[
                {stateid:1,statename:"Andhra Pradesh"},
                {stateid:2,statename:"Arunachal Pradesh"},
                {stateid:3,statename:"Assam"},
                {stateid:4,statename:"Bihar"},
                {stateid:5,statename:"Chhattisgarh"},
                {stateid:6,statename:"Goa"},
                {stateid:7,statename:"Gujarat"},
                {stateid:8,statename:"Himanchal Pradesh"},
                {stateid:9,statename:"Haryana"},
                {stateid:10,statename:"Jammu&Kashmir"},
                {stateid:11,statename:"Jharkhand"},
                {stateid:12,statename:"Karnataka"},
                {stateid:13,statename:"Kerla"},
                {stateid:14,statename:"Madhya Pradesh"},
                {stateid:15,statename:"Maharashtra"},
                {stateid:16,statename:"Manipur"},
                {stateid:17,statename:"Meghalaya"},
                {stateid:18,statename:"Mizoram"},
                {stateid:19,statename:"Nagaland"},
                {stateid:20,statename:"Odisha"},
                {stateid:21,statename:"Punjab"},
                {stateid:22,statename:"Rajasthan"},
                {stateid:23,statename:"Sikkim"},
                {stateid:24,statename:"Tamil Nadu"},
                {stateid:25,statename:"Telangana"},
                {stateid:26,statename:"Tripura"},
                {stateid:27,statename:"Uttar Pradesh"},
                {stateid:28,statename:"West Bengal"},

            ]
   
   
        }

