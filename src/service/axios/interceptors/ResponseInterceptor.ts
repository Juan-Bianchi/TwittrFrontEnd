import { AxiosInstance } from "axios";


const responseInterceptor = (axiosInstance: AxiosInstance)=> {
  axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      window.location.href = `/sign-in`
    } else {
      console.log(error)
    }
    return {
      isValidToken: false
    }
  },
  {synchronous:true})
}

export default responseInterceptor;