const PORT = 3300;
const express = require("express");
const app = express();
const {connectDB} = require("./src/config/db");

app.get("/", (req,res) => {
    res.send("hello")
});

connectDB();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});