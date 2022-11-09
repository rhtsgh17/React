import axios, {syncToken} from "./baseUrl2";

export function loginProses(payload) {
    return axios.post("/login", payload);
}

export function registerProses(payload) {
    return axios.post("/register", payload);
}

export function authMeProses(payload) {
    syncToken()
    return axios.get("/authme");
}