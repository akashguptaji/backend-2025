import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Akash" },
{
    id: 2, name: "Akash2"
}
]
app.post("/users", (req:Request, resp:Response)=>{
const {name}=req.body;

const newUser={
    id:users.length+1,
    name
}

users.push(newUser);
resp.status(201).json(newUser);

})

const PORT=3001;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
