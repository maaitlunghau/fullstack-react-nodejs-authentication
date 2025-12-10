const express = require("express");
const {
    login,
    register,
    logout,
} = require("../controllers/auth.controller");


// router
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("logout", logout);


module.exports = authRouter;