import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // Se o usuário estiver autenticado, renderiza o conteúdo da rota (Outlet)
  // Caso contrário, redireciona para a página de login
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;