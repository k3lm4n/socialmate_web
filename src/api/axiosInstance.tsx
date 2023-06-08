import axios from "axios";
import { parseCookies } from "nookies";

const { "socialMate.token": token } = parseCookies();


const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:3443/axiosInstance",

});

export default axiosInstance;

if (token) {
    axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
}


