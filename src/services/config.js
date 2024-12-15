import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

let cast = null;

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const tokenCook = getCookie("token");
    if (tokenCook) {
      request.headers["Token"] = tokenCook.token;
    }
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    if (response.data.cas_id) {
      cast = response.data.cas_id;
      setCookie(response.data.cas_id);
    } else {
      setCookie(cast);
    }
    // setCookie(response.data.cas_id);
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
