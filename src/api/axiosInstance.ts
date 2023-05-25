import axios from "axios";
import { parseCookies } from "nookies";

const { "socialMate.token": token } = parseCookies();


const axiosInstance = axios.create({
    baseURL: process.env.URL_BASE || "http://localhost:3443/axiosInstance",

});

export default axiosInstance;

if (token) {
    axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
}


