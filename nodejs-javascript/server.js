// import
require("dotenv").config();
const express = require("express");
const path = require("path");
const { PORT } = require("./constants");


// configure server
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// router
app.get('/', (req, res) => {
    res.render("home");
});


// run servers
const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`✅ Server is now running on ${URL}`);
});