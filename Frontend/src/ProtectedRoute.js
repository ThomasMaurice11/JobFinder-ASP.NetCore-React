// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { token } = useAuth();

  return token ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
