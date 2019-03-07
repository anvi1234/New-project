import {NgModule} from "@angular/core";
import{RouterModule} from "@angular/router";

import{NavComponent} from "./nav.component";
import{StartComponent} from "./start.component";
import{Routes} from "@angular/router";
import{CommonModule} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import { MynavComponent } from './mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatStepperModule,MatToolbarModule,MatFormFieldModule, MatInputModule, MatSidenavModule,MatCheckboxModule, MatIconModule, MatListModule } from '@angular/material';


import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
 
  MatButtonToggleModule,
  MatCardModule,
 
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  
  MatMenuModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
 
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,

  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { MydashboardComponent } from './mydashboard/mydashboard.component';




























const routes:Routes=[
    {path:"",component: MynavComponent },
   
    {path:"mydashboard",component:MydashboardComponent },
    
]


 @NgModule({
    declarations:[StartComponent,NavComponent, MynavComponent, MydashboardComponent],
    imports:[RouterModule.forChild(routes),MatButtonModule,
        MatIconModule,CommonModule,MatFormFieldModule, MatInputModule,LayoutModule,MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,MatStepperModule,A11yModule,DragDropModule,CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,MatAutocompleteModule,FormsModule,ReactiveFormsModule,
        MatBadgeModule,
        MatBottomSheetModule,
       
        MatButtonToggleModule,
        MatCardModule,
       
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        
        MatMenuModule, MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
       
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
      
        MatTooltipModule,
        MatTreeModule,
      ]
 })
 export class DashBoardModule{

 }