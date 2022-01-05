import axios from "axios";

const ipoAPIHostProd = "http://uipp.agri.ruh.ac.lk:8080/api"; //for production
// const ipoAPIHostDev = "http://localhost:3005"; // for development
// const ipoAPIHostDev = "http://localhost:8081/api"; // for development
const ipoAPIHostDev = "http://uipp.agri.ruh.ac.lk:8080/api"; // for development
// const ipoAPIHostDev = "https://ipobackendapi.herokuapp.com/api"; // for development


const ipoAPIHost = process.env.NODE_ENV === "development" ? ipoAPIHostDev : ipoAPIHostProd;

const instance = axios.create({
    baseURL: ipoAPIHost
});

export default instance;