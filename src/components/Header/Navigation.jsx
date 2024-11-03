import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ margin: '20px 0' }}>
      <Link to="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#C92071' }}>Home</Link>
      <Link to="/produtos" style={{ margin: '0 15px', textDecoration: 'none', color: '#C92071' }}>Produtos</Link>
      <Link to="/sobre" style={{ margin: '0 15px', textDecoration: 'none', color: '#C92071' }}>Sobre</Link>
      <Link to="/contato" style={{ margin: '0 15px', textDecoration: 'none', color: '#C92071' }}>Contato</Link>
    </nav>
  );
};

export default Navigation;
