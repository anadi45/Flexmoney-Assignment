require("dotenv").config();
const PORT = process.env.PORT || 3300;
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const {connectDB} = require("./src/config/db");
const {router} = require("./src/router");

app.use("/",router);
connectDB();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});