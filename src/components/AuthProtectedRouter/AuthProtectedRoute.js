import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthenticationContext } from '../../App';

const AuthProtectedRoute = ({
  redirectPath = '/'
}) => {
  const authenticationContext = useContext(AuthenticationContext);

  if (!authenticationContext.isAuthenticated) {
    return <Navigate to={redirectPath} replace/>;
  } else {
    return <Outlet />;
  }
}

export default AuthProtectedRoute;