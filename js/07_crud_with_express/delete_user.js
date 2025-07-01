const express=require("express");
const app=express();

app.use(express.json());


let users=[{id:1, name:"Akash"},
    {id:2, name:"Irshad"}
]

app.delete("/users/:id", (req, resp)=>{
const userId=parseInt(req.params.id);
const userIndex=users.findIndex(u=>u.id===userId);
if(userIndex!==-1){
users.splice(userIndex, 1);
resp.status(200).json({message:"user deleted successfully"})
}else{
resp.status(404).json({message: "user not found"})
}
})

const PORT=3003;
app.listen(PORT, ()=>{
    console.log(`server is running as ${PORT}`);
})