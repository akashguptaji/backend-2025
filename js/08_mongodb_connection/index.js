 const express= require ("express");
 const mongoose=require("mongoose");
 const app=express();

 app.use(express.json());

 const mongoURI="mongodb://127.0.0.1:27017/akash";

 mongoose.connect(mongoURI)
 .then(()=>{
    console.log("connected to database");
    app.get("/", (req, resp)=>{
        resp.send("mongodb connected");
    })

    app.listen(3000, ()=>{
        console.log("server is running on port 3000");
    })
 })
 .catch((error)=>{
    console.log("error connecting to database");
 })