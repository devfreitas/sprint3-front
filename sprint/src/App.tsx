import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'; // Importando a rota privada

// Páginas
import Login from './pages/Login';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Usuario from './pages/Usuario';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  // Hook para pegar a localização atual e decidir se o Header deve ser mostrado
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <div>
      {/* O Header só será exibido se não estivermos na página de login */}
      {showHeader && <Header title="Portal do Paciente" />}
      
      <main style={{ padding: showHeader ? '1rem' : '0' }}>
        <Routes>
          {/* Rota Pública */}
          <Route path="/" element={<Login />} />

          {/* Rotas Privadas - Envolvidas pelo PrivateRoute */}
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/usuario/:id" element={<Usuario />} />
          </Route>

          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;