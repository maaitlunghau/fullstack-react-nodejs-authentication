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
    return config
});

// add a a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;

