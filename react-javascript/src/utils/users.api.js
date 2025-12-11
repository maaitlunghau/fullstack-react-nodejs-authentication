import axios from "./axios.customize";
const baseURL = "/api/users"

const getAllUsers = () => {
    const URL_API = `${baseURL}/users`;
    return axios.get(URL_API);
}

const getAccountUser = () => {
    const URL_API = `${baseURL}/account`;
    return axios.get(URL_API);
}

export {
    getAllUsers,
    getAccountUser
}