require("dotenv").config();
const PORT = process.env.PORT || 3300;
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

const {connectDB} = require("./src/config/db");
const {router} = require("./src/router");

app.use("/",router);
connectDB();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});