import axios from "axios";

const api = axios.create({
    baseURL: "http://139.128.139.185:8080"
});
export default api;