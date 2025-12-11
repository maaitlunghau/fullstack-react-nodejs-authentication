const Product = require("../models/Product");
const { uploadImageToCloudinary, deleteImageFromCloudinary } = require("../helpers/cloudinary.helper");
const {
    getAllProductsService,
    getSingleProductService,
    createNewProductService,
    deleteProductService
} = require("../services/product.services");
const fs = require("fs/promises");


const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductsService();

        return res.status(200).json({
            success: true,
            message: "✅ Gotten all products succeed",
            data: products
        })

    } catch (err) {
        console.log("❌ Failed to getting all products.", err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const product = await getSingleProductService(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found...",
            })
        }

        return res.status(200).json({
            success: true,
            message: "✅ Gotten the single product succeed",
            data: product
        })

    } catch (err) {
        console.log("❌ Failed to getting the single product.", err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const createNewProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "❌ The file 'proImageUrl' is not exist! Please upload an image"
            })
        }

        const { url, publicId } = await uploadImageToCloudinary(req.file.path);
        await fs.unlink(req.file.path);

        const data = {
            ...req.body,
            proImageUrl: url,
            proImagePublicId: publicId
        };

        const newProduct = await createNewProductService(data);

        return res.status(201).json({
            succeed: true,
            message: "✅ Created new product succeed",
            data: newProduct
        })

    } catch (err) {
        console.log("❌ Failed to creating new product.", err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const updateProduct = async (req, res) => {
    try {

    } catch (err) {
        console.log("❌ Failed to updating product.", err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await getSingleProductService(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: `Product not found with ID ${id}`,
            })
        }

        // check if this image is uploaded by current user 
        // ...

        if (product.proImagePublicId) {
            await deleteImageFromCloudinary(product.proImagePublicId);
        }

        await deleteProductService(id);

        return res.status(200).json({
            success: true,
            message: "✅ Deleted product succeed",
        })

    } catch (err) {
        console.log("❌ Failed to deleting product.", err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


module.exports = {
    getAllProducts,
    getSingleProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
}