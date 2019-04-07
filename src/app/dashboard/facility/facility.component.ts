import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import { User } from "../dashboard.model";
import { DaycareService } from "src/app/daycare.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
    selector:"facility",
    templateUrl:"./facility.component.html",
    styleUrls:["./facility.component.css"],
    
    
})

export class FacilityComponent implements OnInit{
    User: User=new User;
    UserForm:FormGroup;
    filesToUpload: Array<File> = [];















    imageUrl:string="assets/image/upload.png";
  constructor(private service:DaycareService,private router:Router,private fb: FormBuilder,private cd: ChangeDetectorRef){}


  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

saveData(){
  this.service.saveData(this.User).subscribe(y=>{
    if(y.userResponse.message!="warning"){
       this.router.navigate(['./dashboard/location']);
    }
    else{
        alert("y.userResponse.message");
    }
})
}
ngOnInit(){
    this.UserForm=this.fb.group({
        daycarename:['', Validators.required],
        facility:['', Validators.required],
        facility2:['', Validators.required],
        facility3:['', Validators.required],
        extrafacility:['', Validators.required],
        keylocation:['', Validators.required],
        location:['', Validators.required],
        file:['', Validators.required],
    
        extra:new FormArray([])
    });
}

onSubmit(UserForm):void{
    console.log(this.UserForm.value)

}


addExtra(){
    (<FormArray>this.UserForm.get("extra")).push(new FormControl(''));
}
Deleteextra(index){
    (<FormArray>this.UserForm.get("extra")).removeAt(index);
}


fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.User.buildingimage = fileInput.target.files[0]['name'];
  }
}
