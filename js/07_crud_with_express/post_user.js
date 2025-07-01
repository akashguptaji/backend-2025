const express = require("express");
const app = express();

// middleware- json body parse krne ke liye
app.use(express.json());

// dummy user data
const users = [{ id: 1, name: "Akash" },
{ id: 2, name: "Irshad" }
]

// post route for  add new user

app.post("/users", (req, resp) => {
    const { name } = req.body;
    const newUser = {
        id: users.length + 1,
        name: name
    }
    users.push(newUser);
    resp.status(201).json(newUser);
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Post User server runnig as: ${PORT}`)
})