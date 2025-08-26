import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    if (userId.trim() !== '') {
      navigate(`/usuario/${userId}`);
    } else {
      alert('Por favor, digite um ID de usuário.');
    }
  };

  const handleLogout = () => {
    // Remove a flag de autenticação e redireciona para o login
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div>
      <h2>Página Inicial do Portal</h2>
      <p>Digite um ID de usuário e clique no botão para ver os detalhes.</p>
      <input
        type="text"
        placeholder="Digite um ID (ex: 123)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleNavigateToProfile} style={{ marginLeft: '8px', marginRight: '8px' }}>
        Ver Perfil
      </button>
      <button onClick={handleLogout} style={{ backgroundColor: '#d9534f', color: 'white' }}>
        Sair
      </button>
    </div>
  );
};

export default Home;