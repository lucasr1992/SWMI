import axios from "axios";

const api = axios.create({
    baseURL: "//139.128.139.27:8080"
});
export default api;