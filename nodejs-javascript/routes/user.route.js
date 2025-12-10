const express = require("express");
const {
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,
    banUser,
    UnBanUser
} = require("../controllers/user.controller");


// router
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getSingleUser);
userRouter.post("/", createNewUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/:id", banUser);
userRouter.post("/:id", UnBanUser);


module.exports = userRouter;