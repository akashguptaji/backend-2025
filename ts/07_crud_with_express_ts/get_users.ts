import express, { Request, Response } from "express";

const app = express();

let users = [{
    id: 1, name: "Akash"
}, {
    id: 2, name: "Akash 2"
}
]

app.get("/users", (req:Request, resp:Response)=>{
resp.status(200).json(users);
})

app.listen (3000, ()=>{
    console.log("Server is running on port 3000");
})
