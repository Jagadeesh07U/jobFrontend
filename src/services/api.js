import axios from "axios";

const api = axios.create({
 baseURL: "https://jobbackend-db.onrender.com"
});

export default api;