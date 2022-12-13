import Cookies from "js-cookie";
import axios, { syncToken } from "./url";

export async function LoginProses(payload) {
  return axios.post(`/login`, payload);
}

export async function RegisterProses(payload) {
  return axios.post(`/register`, payload);
}

export async function LupaPasswordProses(payload) {
  return axios.post(`/lupa-password`, payload);
}

export async function ResetPasswordProses(id, token, payload) {
  return axios.post(`/reset-password/${id}/${token}`, payload);
}

export function authMeProcess() {
  syncToken();
  return axios.get(`/authme`);
}