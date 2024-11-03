import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardProdutosLista.css';

const CardProdutosLista = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <div className="product-grid" style={{ marginLeft: '190px', marginTop: '-715px' }}>
        {Array(15).fill().map((_, index) => (
          <Link to={`/product/${index + 1}`} key={index} className="product-item" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div className="product-square">
              {}
              <img src="https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small" alt={`Produto ${index + 1}`} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <p style={{ margin: '0', color: '#ccc' }}>Tênis</p>
              <p style={{ margin: '0' }}>K-Swiss V8 - masculino</p>
              <p style={{ margin: '0', textDecoration: 'line-through', color: '#ccc' }}>$200</p>
              <p style={{ margin: '0', fontWeight: 'bold' }}>$100</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardProdutosLista;
