import axios from 'axios';

export const API_URL = "http://localhost:8080";

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})
