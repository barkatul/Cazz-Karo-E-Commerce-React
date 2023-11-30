import axios from "axios";

export const DEPLOYED='https://colorful-mittens-bull.cyclic.app/'
export const LOCALHOST = "http://localhost:5454"

export const API_BASE_URL = DEPLOYED;

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})