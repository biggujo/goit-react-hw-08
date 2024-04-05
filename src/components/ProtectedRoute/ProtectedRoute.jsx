import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({
  redirectTo,
  component: Component,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default ProtectedRoute;
