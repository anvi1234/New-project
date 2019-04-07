import {Component, OnInit} from '@angular/core';
import { DaycareService } from "src/app/daycare.service";
import{Router} from "@angular/router";
import {User} from "../dashboard.model";
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

const URL = 'http://localhost:8800/api/user'



 
@Component({
  selector: 'userprofile',
  styleUrls:['./userprofile.component.css'],
  templateUrl:"./userprofile.component.html",
  
})
export class UserProfileComponent implements OnInit{
  imageUrl:string="assets/image/upload.png";
 UserForm:FormGroup;

  fileToUpload:File=null;
 User:User=new User;
  constructor(private service:DaycareService,private router:Router){
   
  }


ngOnInit(){
  this.UserForm=new FormGroup({
    ExtraFacility:new FormArray([])

  });
}
addExtra(){
  (<FormArray>this.UserForm.get("ExtraFacility")).push(new FormControl(''));
}
Deleteextra(index){
  (<FormArray>this.UserForm.get("ExtraFacility")).removeAt(index);
}










  handleFileInput(file:FileList){

    this.fileToUpload=file.item[0];

  var reader=new FileReader();
  reader.onload=(event:any)=> {
    this.imageUrl=event.target.result;

  }

  reader.readAsDataURL(this.fileToUpload);
  }

onClick(){
  $("#image1").click(function () {
    $("#image2").trigger('click');
});

}

saveData(){
  this.service.saveData(this.User).subscribe(y=>{
    if(y.userResponse.message!="warning"){
       this.router.navigate(['./dashboard/facility']);
    }
    else{
        alert("y.userResponse.message");
    }
})
}
}
