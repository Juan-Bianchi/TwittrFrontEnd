import { AxiosInstance } from "axios";


const responseInterceptor = (axiosInstance: AxiosInstance)=> {
  axiosInstance.interceptors.response.use((response) => {
    return response;
  },(error) => {
    if (error?.status?.code === 401) {
      window.location.href = `http://localhost:3000/sign-in`
    } else {
      console.log(error)
    }
  })
}

export default responseInterceptor;