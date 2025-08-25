import axios from "axios";

export default function getApiClient() {
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })
    return api
}

