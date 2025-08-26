import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importe o logo (você precisará baixar o logo do HC e colocar na pasta `src/assets` por exemplo)
// Por simplicidade, vou usar um placeholder, mas você deve substituir pelo caminho da sua imagem.
// Ex: import logoFmusp from '../assets/logo-fmusp.png';

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página

    if (usuario === 'admin' && senha === 'admin') {
      // Salva um "token" simples no localStorage para indicar que o usuário está logado
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home'); // Redireciona para a página Home após o login
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          {/* Substitua 'logo-placeholder.png' pelo caminho real do seu logo */}
          <img src="https://www.hc.fm.usp.br/hc/assets/img/logo-hc-fmup.png" alt="Fmusp Logo" className="logo" />
        </div>
        <div className="form-section">
          <h2>Hospital das Clínicas</h2>
          <p>Faça login para acessar o portal e verificar suas consultas e exames!</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="usuario">Usuário:</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
          <div className="links">
            <a href="#">Esqueceu a senha?</a>
            <a href="#">Cadastre-se</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;