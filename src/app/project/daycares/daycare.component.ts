import{Component} from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector:"daycare-page",
    templateUrl:"./daycare.component.html",
    styleUrls: ["./daycare.component.css"]
})
export class DayCareComponent{
    title1="Sign Up";
    title2="Log Out";
   title3= "Register";
   h1="Ba";
    h2="bb";
    h3="oo";
    milleniumlocation="Greater Noida,Near ATS Pardiso Society";
    dolphinelocation="Gamma 1-Greater, Noida - 201310";
    illusionlocation="Ns A 07,Greater, Noida - 201310";
    mmilocation="NS Plot Nri Omax Society, Greater Noida";
    kingdomlocation="ns 12 g block, beta 2, Greater Noida";
    pridelocation="NS-32 Pocket B ,Greater Noida";
    cambridgelocation="Alpha I ,Greater Noida";
    milleniumdaycarename="Little Millennium Pre-School";
    dolphinedaycarename="Dolphin Kids School & Day Care";
    illusiondaycarename="Little Illusions Preschool"; 
    mmidaycarename="MMI Greater Noida ";
    kingdomdaycarename="Kids Kingdom";
    pridedaycarename="Mothers Pride Education Personna Pvt Ltd";
    cambridgedaycarename="Cambridge Montessori Pre School ";
    more="more photos";
    title4="photos";
    
    title6="location";
    title7="reviews";
    public millimagesUrl
    public dolphineimageUrl
    public illusionimageUrl
    public mmiimageUrl
    public prideimageUrl
    public cambridgeimageUrl
    public kingdomimageUrl
    public milleniumfacility
    public dolphinefacility
    public extramilleniumfacility
    public mmifacility
    public kingdomfacility
    public extradolphinefacility
    public illusionfacility
    public pridefacility
    public cambridgefacility
    public extraillusionfacility
    public extrammifacility
    public extrakingdomfacility
    public extrapridefacility
    public extracambridgefacility
   
  
    private active:boolean = false;
      
ngOnInit(){
    
        this.millimagesUrl = [
            "assets/image/millenium/m1.jpg",
            "assets/image/millenium/m2.jpg",
            "assets/image/millenium/m3.jpg",
            "assets/image/millenium/m4.jpg",
            "assets/image/millenium/m5.jpg",
            "assets/image/millenium/m6.jpg",
            "assets/image/millenium/m7.jpg",
            "assets/image/millenium/m8.jpg",
            "assets/image/millenium/m9.jpg",
            "assets/image/millenium/m10.jpg",
            "assets/image/millenium/m11.jpg",
            "assets/image/millenium/m12.jpg",
            "assets/image/millenium/m13.jpg",
            "assets/image/millenium/m14.jpg",
            
        ];

        this.dolphineimageUrl=[
            "assets/image/dolphine/dolphine2.jpg",
            "assets/image/dolphine/dolphine3.jpg",     
            "assets/image/dolphine/dolphine4.jpg",
            "assets/image/dolphine/dolphine5.jpg",
            "assets/image/dolphine/dolphine6.jpg",
            "assets/image/dolphine/dolphine7.jpg",
            "assets/image/dolphine/dolphine8.jpg",
            "assets/image/dolphine/dolphine9.jpg",
            "assets/image/dolphine/dolphine10.jpg",
            "assets/image/dolphine/dolphine11.jpg",
           ];
        this.illusionimageUrl=[
            "assets/image/illusion/illusion1.jpg",
            "assets/image/illusion/illusion2.jpg",
            "assets/image/illusion/illusion3.jpg",
            "assets/image/illusion/illusion4.jpg",
            "assets/image/illusion/illusion5.jpg",
            "assets/image/illusion/illusion6.jpg",
            "assets/image/illusion/illusion7.jpg",
            "assets/image/illusion/illusion8.jpg",
            "assets/image/illusion/illusion9.jpg",
            "assets/image/illusion/illusion10.jpg",
            "assets/image/illusion/illusion11.jpg",
            "assets/image/illusion/illusion12.jpg",
            "assets/image/illusion/illusion13.jpg",
            "assets/image/illusion/illusion14.jpg",
            "assets/image/illusion/illusion15.jpg",
            "assets/image/illusion/illusion16.jpg",
            "assets/image/illusion/illusion18.jpg",
            
            
                         
        ];
        this.mmiimageUrl=[
            "assets/image/mmi/mmi1.jpg",
            "assets/image/mmi/mmi2.jpg",
            "assets/image/mmi/mmi3.jpg",
            "assets/image/mmi/mmi4.jpg",
            "assets/image/mmi/mmi5.jpg",
            "assets/image/mmi/mmi6.jpg",
            "assets/image/mmi/mmi7.jpg",
            "assets/image/mmi/mmi8.jpg",
            "assets/image/mmi/mmi9.jpg",
            "assets/image/mmi/mmi10.jpg",
            "assets/image/mmi/mmi11.jpg",
            "assets/image/mmi/mmi12.jpg",
           

        ];
        
        this.kingdomimageUrl=[
             "assets/image/kingdom/kingdom1.jpg",
             "assets/image/kingdom/kingdom2.jpg",
             "assets/image/kingdom/kingdom3.jpg",
             "assets/image/kingdom/kingdom4.jpg",
             "assets/image/kingdom/kingdom5.jpg",
             "assets/image/kingdom/kingdom6.jpg",
             "assets/image/kingdom/kingdom7.jpg",
             "assets/image/kingdom/kingdom8.jpg",

        ];
        this.prideimageUrl=[
            "asstes/image/pride/pride1.jpg",
            "asstes/image/pride/pride2.jpg",
            "asstes/image/pride/pride3.jpg",
            "asstes/image/pride/pride4.jpg",
            "asstes/image/pride/pride5.jpg",
            "asstes/image/pride/pride6.jpg",
            "asstes/image/pride/pride7.jpg",
            "asstes/image/pride/pride8.jpg",
            "asstes/image/pride/pride9.jpg",
            "asstes/image/pride/pride10.jpg",
            "asstes/image/pride/pride11.jpg",
            "asstes/image/pride/pride12.jpg",
            "asstes/image/pride/pride13.jpg",
            "asstes/image/pride/pride14.jpg",
            "asstes/image/pride/pride15.jpg",
            "asstes/image/pride/pride16.jpg",
        ];
        this.cambridgeimageUrl=[
            "assets/image/cambridge/cam1.jpg",
            "assets/image/cambridge/cam2.jpg",
            "assets/image/cambridge/cam3.jpg",
            "assets/image/cambridge/cam4.jpg",
            "assets/image/cambridge/cam5.jpg",
            "assets/image/cambridge/cam6.jpg",
            "assets/image/cambridge/cam7.jpg",
           
        ];


        this.pridefacility=["safety&security","confidence building","child-friendly infrastructure"],
        this.cambridgefacility=["Montessori Environment","Safety & Security","Health & Hygiene"];
        this.milleniumfacility=["Huge AC Campus","Amphitheatre","Splash pool","Rain Shower","Sand pit"];
        this.dolphinefacility=["A warm, safe and comfortable environment","Ideal ratio child care takers."];
        this.illusionfacility=["Day boarding facility","hygienic washrooms","vegetarian kitchen "];
        this.mmifacility=["Pre School","360 Degree Learning","Nutrition & Health"];
        this.kingdomfacility=["clean and healthy environment","safe and comfortable","healthy and nutrients food"];
        this.extramilleniumfacility=["CCTV","Qualified&Trained Staff","AC Transport With GPS tracking","Fitness Center","Cycling Track"];
        this.extradolphinefacility=["bright,clean and well- appointed room","Circle times each day","House Meal facilities for all age groups from morning till evening","Outdoor play for gross motor development","Scheduled rest time","Experienced E.C.E teachers"];
        this.extraillusionfacility=["safe and secure transportation"," monthly medical checkup students","High standards of healthy and nutritious meals","Air conditioned transport cabs"]
        this.extrammifacility=["Safe Equipment","Experienced Teachers","Hone Skills"];
        this.extrakingdomfacility=["dance classes", "story telling", "reading club", "tuition"];
        this.extrapridefacility=["Yoga"," Intellectual Development Sessions"," Taekwondo","Rain Dance"];
        this.extracambridgefacility=["Nurturing & Caring Environment","Different Approach","Well Qualified Teachers"];
    }












    





constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval=2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators=false;
    
  }
 
 
  
  
 

  
  
 
  

 
  menuheader={
    'menu-header':true,
  }
   menucontainer={
      "menu-container":true,
      
  }
  locationheader={
      "location-header":true,
  }
  locationcontainer={
    
    "location-container":true,
    "location-container:before":true,
    "location-container:after":true,

}

  facilty={
      "facility":true,
  }
  headerbox={
    "header-box":true,

}

}





  
