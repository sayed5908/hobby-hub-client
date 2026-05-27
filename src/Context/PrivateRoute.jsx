import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();    

    if(loading){
        return <span className="loading loading-spinner loading-sm"></span>
    }

    if(user) {
        return children;
    }
    else return <Navigate state={location.pathname} to={'/login'}></Navigate>
    //if user thake
    
    //na thekle navigate to login

};

export default PrivateRoute;