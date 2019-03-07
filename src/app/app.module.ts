import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from "@angular/http";
import { AppRoutingModule } from './app-routing.module';

import{ApComponent} from "./app.component";

import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    ApComponent,
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule
  ],
  providers: [],
  bootstrap: [ApComponent],

})
export class AppModule { }
