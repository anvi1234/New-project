import{DaycareManager} from "../registeration/manager.component";
import{ NextPage} from "../registeration/nextpage.component";
import{Registeration} from "../registeration/registeration.component";
import{FrontComponent} from "../front.component";
import{Routes} from "@angular/router";
import{StartComponent} from "./start.component";
import{SignUpComponent} from "../signup.component";
import{ UserLoginComponent} from "../userlogin.component";
import{DaycareManagerLogin} from "../registeration/managerlogin.component";


export const routes:Routes=[
     {path:"nextpage/:number",component:NextPage},
    {path:"managerlogin",component:DaycareManagerLogin},
    {path:"daycareregisteration",component:Registeration},
    {path:"frontpage",component:FrontComponent},
    { path: 'start', component: FrontComponent },
    {path:"daycaremanager",component:DaycareManager},
    {path:"signup",component:SignUpComponent},
    {path:"dashboard",loadChildren:'src/app/dashboard/dashboard.module#DashBoardModule'},
    {path: 'login', component: UserLoginComponent },
  
    { path: '**', component:FrontComponent },

]
    
