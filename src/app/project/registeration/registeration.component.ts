import{Component, OnInit} from "@angular/core";
import{Router} from "@angular/router";
import{ActivatedRoute} from "@angular/router";
@Component({
    selector:"registeration",
    templateUrl:"./registeration.component.html",
    styleUrls:['./registeration.component.css']
})

export class Registeration {
    title="DayCare Manager";
    title1="Provide Facility details";
    title2="Success is in your hand";
    title3="Uniqueness provide";
    link1="Call Us";
    link2="Register";
    link3="Sign in";
    h1="Ba";
    h2="bb";
    h3="oo";
    btn="Start now";
    title4="Start with the details";
    constructor(private routes:Router,private route:ActivatedRoute){}
    go(){
        this.routes.navigate(['/daycaremanager']);
    }
    
}

