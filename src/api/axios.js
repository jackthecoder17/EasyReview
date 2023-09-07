import axios from "axios";

const Apimanager = axios.create({
    baseURL: "https://review-generator-backend.onrender.com",
    responseType: "json",
});

export default Apimanager;