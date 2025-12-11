const express = require("express");
const {
    login,
    register,
    logout,
    refreshToken,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");


const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("logout", authMiddleware, logout);
authRouter.post("/refresh-token", refreshToken);


module.exports = authRouter;