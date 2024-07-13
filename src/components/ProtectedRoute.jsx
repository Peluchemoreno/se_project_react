import { Navigate } from "react-router-dom";
import { useContext } from "react";
import IsLoggedInContext from "../contexts/IsLoggedInContext/IsLoggedInContext";


export default function ProtectedRoute({children, anonymous = false}){
  const {isLoggedIn} = useContext(IsLoggedInContext)
  
  if (!isLoggedIn && !anonymous) {
    return <Navigate to='/' />
  }

  return children
  
}