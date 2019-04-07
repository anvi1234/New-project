import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";


import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatStepperModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTreeModule } from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';



import { MynavComponent } from '../dashboard/mynav/mynav.component';
import { UserProfileComponent } from '../dashboard/userprofile/userprofile.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StartComponent } from "day-care/src/app/project/router/start.component";
import { FacilityComponent } from "./facility/facility.component";
import { LocationComponent } from "./location/location.component";
import { GalleryComponent } from "./Gallery/gallery.component";
import{FormsModule,ReactiveFormsModule} from "@angular/forms";




const routes:Routes=[
    {
      path:"",
      component: MynavComponent,
      children: [
        {path:"userprofile",component:UserProfileComponent },
        {path:"facility",component:FacilityComponent }, 
        {path:"location",component:LocationComponent },
        {path:"gallery",component:GalleryComponent}

      ]
    
        
      
    },
   
    // {path:"mydashboard",component:MydashboardComponent },
    
]




@NgModule({
    imports:[MatStepperModule,MatIconModule,CommonModule,MatFormFieldModule, MatInputModule,LayoutModule,MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,MatStepperModule,A11yModule,DragDropModule,CdkStepperModule,
        CdkTableModule, CdkTreeModule,MatAutocompleteModule, MatBadgeModule,RouterModule.forChild(routes),
        MatBottomSheetModule,NgbModule,FormsModule , ReactiveFormsModule ,
       
        MatButtonToggleModule,
        MatCardModule, MatFormFieldModule,
       
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
        MatTreeModule,],
    declarations:[StartComponent,MynavComponent,UserProfileComponent,FacilityComponent,LocationComponent,GalleryComponent]
})
export class DashboardModule{

}