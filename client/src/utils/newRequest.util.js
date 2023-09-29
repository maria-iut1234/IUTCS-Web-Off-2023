import axios from "axios";
import BASE_URL_BACK from "./helper.js";

const newRequest = axios.create({
    baseURL: `${BASE_URL_BACK}iutcs/`,
    withCredentials: true,
});

export default newRequest;