import { AxiosInstance } from "axios";
import cookie from "../../Cookie";

const requestInterceptor = (axiosInstance: AxiosInstance)=> {
  axiosInstance.interceptors.request.use((config)=> {
    const jwtToken = cookie.getToken();
    config.headers["Authorization"] = jwtToken;

    return config;
  }, error => Promise.reject(error))
}

export default requestInterceptor;