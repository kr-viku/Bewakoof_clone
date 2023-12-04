import axios from "axios";

let base_url = "https://academics.newtonschool.co/api/v1/ecommerce";

/**
 * Config api request
 **/

const apiClientServices = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const setAuthorization = (token) => {
  if (!token) {
    return;
  }
  apiClientServices.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const HandleError = (e) => {
  return e?.response
    ? e.response.data?.error || e.response.data.errors
    : e.error || "Cannot connect to server";
};

export default apiClientServices;
