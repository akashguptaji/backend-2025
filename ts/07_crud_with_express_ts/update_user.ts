import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Akash" },
{ id: 2, name: "Akash2" }
]

app.put("/users/:id", (req: Request, resp: Response) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) {
        return resp.status(404).json({ message: "User not found" });

    }
    user.name = name;
    resp.status(200).json(user);

})

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})