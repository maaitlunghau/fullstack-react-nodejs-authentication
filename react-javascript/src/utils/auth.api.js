import axios from "./axios.customize";
const baseURL = "/api/auth"

const registerUser = (data) => {
    const URL_API = `${baseURL}/register`
    return axios.post(URL_API, data);
}

const loginUser = (data) => {
    const URL_API = `${baseURL}/login`
    return axios.post(URL_API, data);
}

export {
    registerUser,
    loginUser,
}