import { Navigate, Outlet } from "react-router-dom"
import Loader from "../loader/Loader"

interface PageWrapperProps {
  isLoading: boolean,
  isAuthorized: boolean
}

const PageWrapper = ({isLoading, isAuthorized}: PageWrapperProps) => {
  if(isLoading){
    return <Loader />
  }
  else if(isAuthorized) {
    return <Outlet/> 
  }
  return <Navigate to="/sign-in" replace={true} /> 
}

export default PageWrapper