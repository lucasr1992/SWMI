import axios from "axios";

const api = axios.create({
    baseURL: "http://139.128.217.162:8080"
});
export default api;