import axios, { AxiosInstance } from "axios";
import requestInterceptor from "./interceptors/RequestInterceptor";
import responseInterceptor from "./interceptors/ResponseInterceptor";

const axiosClient: AxiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_API_URL || "https://twitter-ieea.onrender.com/api"
});

requestInterceptor(axiosClient);
responseInterceptor(axiosClient);

export default axiosClient;
