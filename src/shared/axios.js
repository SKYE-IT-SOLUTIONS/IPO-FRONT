import axios from "axios";

const ipoAPIHostProd = "https://api/ipo.agri.ruh.ac.lk"; //for production
// const ipoAPIHostDev = "http://localhost:3005"; // for development
const ipoAPIHostDev = "http://localhost:8081/api"; // for development

const ipoAPIHost = process.env.NODE_ENV === "development" ? ipoAPIHostDev : ipoAPIHostProd;

const instance = axios.create({
    baseURL: ipoAPIHost
});

export default instance;