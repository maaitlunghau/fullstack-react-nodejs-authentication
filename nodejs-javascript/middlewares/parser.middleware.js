const express = require("express");


// middleware
const urlencodedParser = express.urlencoded({ extended: true });
const jsonParser = express.json();


module.exports = { urlencodedParser, jsonParser }