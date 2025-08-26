import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#eee', padding: '1rem', marginBottom: '1rem' }}>
      <h1>{title}</h1>
      <nav>
        <Link to="/home" style={{ marginRight: '1rem' }}>
          Home
        </Link>
        <Link to="/sobre" style={{ marginRight: '1rem' }}>
          Sobre
        </Link>
        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
          Sair
        </button>
      </nav>
    </header>
  );
};

export default Header;