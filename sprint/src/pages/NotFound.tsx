import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <h2>404 - Página Não Encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};

export default NotFound;