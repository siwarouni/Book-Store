import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router'
import { Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='test-center'>
            <Spinner aria-label="Centre-aligned spiner exp" />
        </div>
    }

    if(user){
        return children;
    }

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute