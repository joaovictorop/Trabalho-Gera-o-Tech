import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

 
  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname]);

  return (
    <div style={{ marginTop: '15px' }}>
      <div className="header" style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <div 
          className="logo-container" 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
          onClick={handleLogoClick}
        >
          <div 
            className="logo" 
            style={{ 
              width: '50px', 
              height: '40px', 
              backgroundColor: '#C92071', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginRight: '10px', 
              marginLeft: '40px',
              borderRadius: '4px', 
            }}
          >
            <img 
              src="data:image/png;base64,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" 
              alt="Logo" 
              title="Logo Digital Store"
              style={{ width: '100%', height: '80%' }} 
            />
          </div>
          <h1 style={{ color: '#C92071', margin: 0, fontFamily: 'Arial, sans-serif' }}>Digital Store</h1>
        </div>
        <div className="search-container" style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Pesquisar Produto..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ 
              padding: '8px 30px 8px 10px',
              borderRadius: '4px', 
              border: 'none', 
              backgroundColor: '#F5F5F5',
              color: '#333',  
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)', 
              width: '550px',
              height: '35px'  
            }} 
          />
          <button 
            onClick={handleSearch} 
            style={{ 
              background: 'none', 
              border: 'none', 
              position: 'absolute', 
              right: '10px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              cursor: 'pointer'
            }}
            title="Buscar"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              style={{ 
                width: '20px', 
                height: '20px', 
                fill: '#CCCCCC' 
              }}
            >
              <path d="M10.5 3C6.36 3 3 6.36 3 10.5S6.36 18 10.5 18c2.25 0 4.29-.83 5.86-2.21l3.54 3.54c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-3.54-3.54C17.17 12.79 18 11.42 18 10.5 18 6.36 14.64 3 10.5 3zm0 14C7.46 17 5 14.54 5 10.5S7.46 4 10.5 4 16 6.46 16 10.5 13.54 17 10.5 17z"/>
            </svg>
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <Link 
            to="/register" 
            style={{ 
              color: '#474747', 
              textDecoration: 'underline', 
              fontSize: '16px', 
              marginRight: '30px',
              marginLeft: '30px',
            }}
          >
            Cadastre-se
          </Link>
          <button 
            onClick={handleLoginClick} 
            style={{ 
              backgroundColor: '#C92071', 
              color: 'white', 
              borderRadius: '4px', 
              padding: '10px 20px', 
              fontWeight: 'bold', 
              fontSize: '14px', 
              border: 'none', 
              cursor: 'pointer',
              marginLeft: '30px'
            }}
          >
            Entrar
          </button>
          <FaShoppingCart 
            style={{ 
              fontSize: '24px', 
              color: '#1F1F1F', 
              cursor: 'pointer', 
              marginLeft: '80px'
            }} 
            onClick={() => navigate('/cart')}
            title="Carrinho"
          />
        </div>
      </div>
      <nav style={{ display: 'flex', marginLeft: '25px', padding: '10px' }}>
        {['/', '/products', '/categorias', '/meus-pedidos'].map((path) => (
          <Link 
            key={path}
            to={path} 
            style={{ 
              margin: '0 15px', 
              textDecoration: isActive(path) ? 'underline' : 'none',
              color: isActive(path) ? '#C92071' : '#474747',
              fontWeight: isActive(path) ? 'bold' : 'normal' 
            }}
          >
            {path === '/' ? 'Home' : path === '/products' ? 'Produtos' : path === '/categorias' ? 'Categorias' : 'Meus Pedidos'}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
