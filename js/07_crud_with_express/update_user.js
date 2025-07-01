const express = require("express");
const app = express();

// json body ko parse krne ke liye middleware
app.use(express.json());

// dummy data user
let users = [{ id: 1, name: "Akash" },
{ id: 2, name: "Irshad" }
]

// put route-existing user ke data ko update krne ke liye
app.put("/users/:id", (req, resp) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    // check kr raheh user ko

    const user = users.find(u => u.id === userId);

    if (user) {
        user.name = name;
        resp.status(200).json(user);
    } else {
        resp.status(404).json({ message: "User not found" });
    }
})

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})