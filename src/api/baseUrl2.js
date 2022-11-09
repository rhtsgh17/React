import axios from "axios";
import Cookies from "js-cookie";
const client = axios.create({
  baseURL: "https://api-react-2.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${Cookies.get("myapps_token")}`,
  },
});

client.interceptors.response.use(
  (response) => {
    console.log("res", response);
    return response;
  },

  (error) => {
    console.log("err", error);

    if (401 === error?.response?.status) {
      Cookies.remove("myapps-token");

      clearToken();
      localStorage.clear();
      window.location.replace("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

export const syncToken = () => {
  client.defaults.headers["Authorizaton"] = `Bearer ${Cookies.get(
    "myapps_token"
  )}`;
};

export const clearToken = () => {
  delete client.defaults.headers["Authorizaton"];
};
export default client;
