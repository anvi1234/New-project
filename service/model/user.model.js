const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    //userId: Number,
      email: String,
      firstname:String,
      lastname:String,
      phoneno:Number,
    //uLastName: String,
  jobpostition:String,
  state:String,

      city:String,
    //uMobileNo: String,
    //uAddress: String,
  
   password: String,
},
    {
        collection: "User",
        timestamps: true
    });

    module.exports = mongoose.model('User',userSchema);



    const dashboardSchema = mongoose.Schema({
        //userId: Number,
          daycarename:String,
          keylocation:String,
          location:String,
          facility:String,
          facility2:String,
          facility3:String,
          extrafacility:String,
          file:String,
          
    },
        {
            collection: "Dashboard",
            timestamps: true
        });

module.exports = mongoose.model('Dashboard',dashboardSchema);

