import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)
    
    if(loading){
        return <span className="loading loading-spinner text-info"></span>
    }
    if(user){
        return children
    }
    
    
    return <Navigate to="/signin"></Navigate>
};

export default PrivateRoute;