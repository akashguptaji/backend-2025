// Express module import
const express = require("express");
const app = express();

// dummy user array (database ki place per)
let users = [{
    id: 1,
    name: "John"
},
{
    id: 2,
    name: "Akash"
}]

// get route
app.get("/", (req, resp) => {
    resp.status(200).json(users);

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running as:  ${PORT}`);
})