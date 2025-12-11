const express = require("express");
const userRouter = require("./user.route");
const productRouter = require("./product.route");
const authRouter = require("./auth.route");


const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);


module.exports = rootRouter;