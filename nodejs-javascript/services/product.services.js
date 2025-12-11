const Product = require("../models/Product");


const getAllProductsService = () => Product.find({});

const getSingleProductService = (id) => Product.findById(id);

const createNewProductService = (data) => Product.create(data);

const deleteProductService = (id) => Product.findByIdAndDelete(id);


module.exports = {
    getAllProductsService,
    getSingleProductService,
    createNewProductService,
    deleteProductService
}