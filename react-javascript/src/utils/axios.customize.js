import axios from "axios"

// set config default when creating the instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
}, function (error) {
    return Promise.reject(error);
});

// alter defaults after instance has been created
// add a request interceptor
instance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
    return config
}, function (error) {
    return Promise.reject(error);
});

// add a a response interceptor
instance.interceptors.response.use(function (response) {
    if (response && response.data) return response.data;
}, function (error) {
    if (error?.response?.data) return error?.response?.data
    return Promise.reject(error);
});

export default instance;