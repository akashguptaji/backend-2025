
# MongoDB Connection and Create User API (Express + Mongoose)

## ✅ Project Setup

- Node.js
- Express.js
- Mongoose (MongoDB ODM)

---

## ✅ Database Connection

```js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const mongoURI = "mongodb://127.0.0.1:27017/akash";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(() => {
        console.log("Error connecting to MongoDB");
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## ✅ Mongoose Schema & Model (User)

```js
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

const User = mongoose.model("User", userSchema);
```

---

## ✅ Create User API (POST /create-user)

### 📍 URL:

```
POST http://localhost:3000/create-user
```

### 📍 Headers:

| Key | Value |
|---|---|
| Content-Type | application/json |

### 📍 Request Body (JSON):

```json
{
    "name": "Irshad",
    "email": "irshad@gmail.com",
    "age": 25
}
```

---

### 📍 Success Response:

- **Status:** `201 Created`

```json
{
    "message": "User created successfully",
    "user": {
        "_id": "MongoGeneratedId",
        "name": "Irshad",
        "email": "irshad@gmail.com",
        "age": 25,
        "__v": 0
    }
}
```

---

### ✅ Error Handling (If Required Fields Missing):

- **Status:** `500 Internal Server Error`

```json
{
    "message": "Error creating user"
}
```

---

## ✅ Next Steps:

- ✔️ `Get All Users`
- ✔️ `Get Single User`
- ✔️ `Update User`
- ✔️ `Delete User`

---

✅ **Date:** July 2, 2025  
✅ **By:** Irshad
