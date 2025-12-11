const express = require("express");
const {
    login,
    register,
    logout,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");


const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("logout", authMiddleware, logout);


module.exports = authRouter;