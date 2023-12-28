import { AxiosInstance } from "axios";
import Cookies from "universal-cookie";

const requestInterceptor = (axiosInstance: AxiosInstance, cookie: Cookies, cookieName: string)=> {
  axiosInstance.interceptors.request.use((config)=> {
    const jwtToken = cookie.get(cookieName);
    config.headers["Authorization"] = jwtToken;

    return config;
  }, (error) => {
    console.log(error)
  })
}

export default requestInterceptor;