import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 

import{FrontComponent} from "./front.component";
import{Registeration} from "./registeration/registeration.component";
import{FlexLayoutModule } from "@angular/flex-layout";
import{DaycareManager} from "./registeration/manager.component";
import{NextPage} from "./registeration/nextpage.component";
import{RouterModule} from "@angular/router";
import{StartComponent} from "./router/start.component";
import{routes} from "./router/router.config";
import{ UserLoginComponent} from "./userlogin.component";
import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import{ DaycareManagerLogin} from "./registeration/managerlogin.component";
import{DayCareComponent} from "./daycares/daycare.component";
import{PhotosComponent} from "./daycares/photos.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{SignUpComponent} from "./signup.component";
import{ExtraComponent} from "./daycares/extra.component";
import { SliderModule } from 'angular-image-slider';
import * as $ from 'jquery';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import { UserProfileComponent } from '../dashboard/userprofile/userprofile.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { DaycareService } from '../daycare.service';



@NgModule({
  declarations: [
    FrontComponent ,
    Registeration,DaycareManager,NextPage,StartComponent,SignUpComponent,UserLoginComponent,DaycareManagerLogin,DayCareComponent,PhotosComponent,ExtraComponent  ],
  imports: [
    BrowserModule,NgbModule,SliderModule,BrowserAnimationsModule,MatCardModule, MatFormFieldModule,
  FlexLayoutModule,RouterModule.forRoot(routes),FormsModule, 
   FormsModule,ReactiveFormsModule,MatInputModule,HttpClientModule,
   
  ],
  providers: [DaycareService ],
  bootstrap: [ StartComponent],

})
export class DayCareModule{ }
