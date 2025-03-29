const mongoose=require("mongoose");

const connect=async(key)=>{
    console.log("connected to database........")
   return await mongoose.connect(key) 
}

module.exports=connect;