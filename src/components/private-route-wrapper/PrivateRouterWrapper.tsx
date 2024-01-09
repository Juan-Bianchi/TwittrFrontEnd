import { useHttpRequestService } from "../../service/HttpRequestService"
import { useEffect, useState } from "react";
import PageWrapper from "./PageWrapper";

const PrivateRouterWrapper = () => {

  const httpRequestService = useHttpRequestService();
  const [isLoading, setisLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const handlePrivateRoutes = (async ()=> {
    const auth = await httpRequestService.routingAuth();
    setIsAuthorized(auth.isValidToken)
    setisLoading(false);
  });

  useEffect(()=> {
    handlePrivateRoutes()
  }, [])

  return <PageWrapper isLoading={isLoading} isAuthorized={isAuthorized}/> 
}

export default PrivateRouterWrapper