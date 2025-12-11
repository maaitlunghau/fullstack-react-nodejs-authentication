const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    proName: {
        type: String,
        required: [true, "Product name is required."],
        trim: true,
    },
    proPrice: {
        type: Number,
        required: [true, "Product price is required."],
        min: [0, "Product price must be greater than 0."],
        max: [10000, "Product price must be less than $10000."],
    },
    proQuantity: {
        type: Number,
        required: [true, "Product quantity is required."],
        min: [0, "Product quantity must be greater than 0."],
        max: [500, "Product quantity must be less than 500 items."],
    },
    isStock: {
        type: Boolean,
        required: [true, "Product isStock is required."],
        default: true,
    },
    proImageUrl: {
        type: String,
        required: [true, "Product Image Url is required."]
    },
    proImagePublicId: {
        type: String,
        required: [true, "Product Image PublicId is required."],
    }
}, {
    timestamps: true,
});


const Product = mongoose.model("Product", productSchema);


module.exports = Product;