import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)

    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <span className="loading loading-spinner text-info"></span>
    }
    if(user){
        return children
    }
    
    
    return <Navigate state={location?.pathname} to="/signin"></Navigate>
};

export default PrivateRoute;