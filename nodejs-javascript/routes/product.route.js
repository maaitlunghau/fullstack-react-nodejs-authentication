const express = require("express");
const {
    getSingleProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller");


// router
const productRouter = express.Router();

productRouter.get("/:id", getSingleProduct);
productRouter.post("/", createNewProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);


module.exports = productRouter;