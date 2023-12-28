import axios, { AxiosInstance } from "axios";
import requestInterceptor from "./interceptors/RequestInterceptor";
import responseInterceptor from "./interceptors/ResponseInterceptor";
import Cookies from "universal-cookie";

const axiosClient: AxiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_API_URL || "https://twitter-ieea.onrender.com/api"
});

const cookie: Cookies = new Cookies();
const cookieName: string  = process.env.REACT_APP_COOKIE_NAME as string

requestInterceptor(axiosClient, cookie, cookieName);
responseInterceptor(axiosClient);

export default axiosClient;

