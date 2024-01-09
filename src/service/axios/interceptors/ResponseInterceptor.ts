import { AxiosInstance } from "axios";
import cookie from "../../Cookie";



const responseInterceptor = (axiosInstance: AxiosInstance)=> {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        cookie.removeToken();
        window.location.href = `/sign-in`;
        return new Promise(() => {});
      }
      console.log(error);
      
      return {
        isValidToken: false
      }
    }
  )
}

export default responseInterceptor;