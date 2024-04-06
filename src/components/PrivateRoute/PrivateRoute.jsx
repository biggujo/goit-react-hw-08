import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { Navigate } from 'react-router-dom';

function PrivateRoute({
  redirectTo,
  component: Component,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
