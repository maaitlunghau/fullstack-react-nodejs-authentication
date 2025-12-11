import axios from "./axios.customize";


const baseURL = "/api/products"

const getAllProducts = () => {
    const URL_API = `${baseURL}/`;
    return axios.get(URL_API)
}

const createNewProduct = (data) => {
    const URL_API = `${baseURL}/`
    return axios.post(data);
}


export {
    getAllProducts,
    createNewProduct
}