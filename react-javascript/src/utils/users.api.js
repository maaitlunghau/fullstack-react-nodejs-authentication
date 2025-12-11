import axios from "./axios.customize";

const baseURL = "/api/users"

const getAllUsers = () => {
    const URL_API = `${baseURL}/users`;
    return axios.get(URL_API);
}

export {
    getAllUsers
}