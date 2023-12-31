import { AxiosInstance } from "axios";


const responseInterceptor = (axiosInstance: AxiosInstance)=> {
  axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = `/sign-in`;
      return new Promise(() => {})
    }
    console.log(error);
    
    return {
      isValidToken: false
    }
  },
  {synchronous:true})
}

export default responseInterceptor;