import { Navigate, Outlet } from "react-router-dom"
import { useHttpRequestService } from "../../service/HttpRequestService"
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

interface ElementProps {
  isLoading: boolean,
  isAuthorized: boolean
}

const PrivateRouterWrapper = () => {

  const httpRequestService = useHttpRequestService();
  const [isLoading, setisLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(()=> {
    const handlePrivateRoutes = (async ()=> {
      const auth = await httpRequestService.routingAuth();
      setIsAuthorized(auth.isValidToken)
      setisLoading(false);
    })

    handlePrivateRoutes()
    
  }, [])

  function Element({isLoading, isAuthorized}: ElementProps) {
    if(isLoading){
      return <Loader />
    }
    else if(isAuthorized) {
      return <Outlet/> 
    }
    return <Navigate to="/sign-in" replace={true} /> 
  }

  return <Element isLoading={isLoading} isAuthorized={isAuthorized}/> 
}

export default PrivateRouterWrapper