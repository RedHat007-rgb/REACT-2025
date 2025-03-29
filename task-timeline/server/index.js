const express=require("express")
const app=express();
require("dotenv").config()
const port=process.env.PORT;



app.get("/",(req,res)=>{
    res.send("hello to my world....");
})

const start=()=>{
    app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})
}

start();