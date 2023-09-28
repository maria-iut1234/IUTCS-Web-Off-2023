import axios from "axios";

const newRequest = axios.create({
    baseURL: "http://localhost:7000/iutcs/",
    withCredentials: true,
});

export default newRequest;