import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Definindo o tipo dos parâmetros da URL
type UsuarioParams = {
  id: string;
};

const Usuario: React.FC = () => {
  // Hook para pegar os parâmetros da URL
  const { id } = useParams<UsuarioParams>();
  const [userData, setUserData] = useState<string | null>(null);

  // Hook para executar um efeito quando o componente é montado ou o 'id' muda
  useEffect(() => {
    // Simula uma busca de dados de uma API
    console.log(`Buscando dados para o usuário ID: ${id}...`);
    setUserData(null); // Limpa dados antigos enquanto carrega novos

    const fetchUserData = setTimeout(() => {
      setUserData(`Nome do Usuário ${id}`);
    }, 1000); // Simula um delay de rede de 1 segundo

    // Função de limpeza: será executada se o componente for desmontado
    return () => clearTimeout(fetchUserData);
  }, [id]); // O array de dependências garante que o efeito rode novamente se o 'id' mudar

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      {userData ? (
        <p><strong>{userData}</strong></p>
      ) : (
        <p>Carregando dados do perfil...</p>
      )}
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};

export default Usuario;