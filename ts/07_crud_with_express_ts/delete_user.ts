import express from "express";

import type {Request, Response} from "express";

const app=express();

app.use(express.json());

let users=[{id:1, name:"Akash"},{
    id:2, name:"Akash2"
}]

app.delete("/users/:id", (req:Request, resp:Response) =>{
const userId=(parseInt(req.params.id));
const index=users.findIndex(u=>u.id===userId);

if(index === -1){
    resp.status(404).json({message:"User not found"})
    return ;
}
users.splice(index, 1);
resp.status(200).json({message:"User deleted successfully"})

})

const PORT=3003;
app.listen(PORT, ()=>{
    console.log(`server is running as ${PORT}`);
})