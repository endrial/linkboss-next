import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.82.135:8088/",
});

export default api;