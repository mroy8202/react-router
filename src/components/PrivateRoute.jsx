import React from 'react'
import { Navigate } from 'react-router-dom';

// here, children is dashboard, which is inside PrivateRouter component
const PrivateRoute = ({ isLoggedIn, children }) => {
  if(isLoggedIn) {
    return children;
  }
  else {
    return <Navigate to='/login'></Navigate>
  }
}

export default PrivateRoute