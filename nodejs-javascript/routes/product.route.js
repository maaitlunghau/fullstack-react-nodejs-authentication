const express = require("express");

const {
    getSingleProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
} = require("../controllers/product.controller");

const uploadFileMiddleware = require("../middlewares/upload-file.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");


const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/", authMiddleware, adminMiddleware, uploadFileMiddleware.single("proImageUrl"), createNewProduct);
productRouter.put("/:id", authMiddleware, adminMiddleware, updateProduct);
productRouter.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);


module.exports = productRouter;