import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.248:8080"
});
export default api;