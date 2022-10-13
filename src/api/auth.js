import axios from "./baseUrl2";

export function loginProses(payload) {
    return axios.post("/login", payload);
}