const express=require("express");
const app=express();


app.use(express.json());

app.get("/",(req, resp)=>{
resp.send("Hello Express");
})
app.listen(3000, ()=>{
console.log("hello express, server is running") ;   
})