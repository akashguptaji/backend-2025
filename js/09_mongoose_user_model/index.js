const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const mongoURI = "mongodb://127.0.0.1:27017/akash";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("✅ MongoDB Connected ✅");
    })
    .catch(() => {
        console.log("❌ Error connecting to MongoDB ❌");
    });

// ✅ User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        default: 18
    }
});

// ✅ Mongoose Model
const User = mongoose.model("User", userSchema);

// ✅ Create User API
app.post("/create-user", async (req, resp) => {
    try {
        const { name, email, age } = req.body;

        // ✅ New User Create
        const newUser = new User({
            name: name,
            email: email,
            age: age
        });

        // ✅ Save in DB
        await newUser.save();

        console.log("✅ User created");

        // ✅ Success Response
        resp.status(201).json({
            message: "User created successfully",
            user: newUser
        });

    } catch (err) {
        console.log(err);
        resp.status(500).json({ message: "Error creating user" });
    }
});

// ✅ Server Listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running as ${PORT}`);
});
