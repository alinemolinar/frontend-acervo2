import axios from "axios";



//const baseURL = `${import.meta.env.VITE_BACKEND_URL}`;
//console.log("base URL");

const api = axios.create({ baseURL: "http://localhost:8000" });

export default api;