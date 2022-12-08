import axios from "axios";

const api = axios.create({
    baseURL: "http://139.128.139.187:8080"
});
export default api;