import express,{Request, Response} from "express";

const app=express();
app.use(express.json());

app.get("/",(req:Request, resp:Response)=>{
resp.send("Ts express");
});

app.listen(3000,()=>{
    console.log("server is running ts+express");
})