const express = require("express");
const {
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,
    banUser,
    UnBanUser,
    getAccountUser
} = require("../controllers/user.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");


const userRouter = express.Router();

userRouter.get("/account", authMiddleware, getAccountUser);
userRouter.get("/", authMiddleware, adminMiddleware, getAllUsers);
userRouter.get("/:id", authMiddleware, adminMiddleware, getSingleUser);
userRouter.post("/", authMiddleware, adminMiddleware, createNewUser);
userRouter.put("/:id", authMiddleware, adminMiddleware, updateUser);
userRouter.delete("/:id", authMiddleware, adminMiddleware, deleteUser);
userRouter.post("/:id", authMiddleware, adminMiddleware, banUser);
userRouter.post("/:id", authMiddleware, adminMiddleware, UnBanUser);


module.exports = userRouter;