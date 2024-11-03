import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h2 style={{ marginTop: '100px', marginLeft: '90px', color: '#474747', fontSize: '25px' }}>
        Produtos em alta
      </h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <Link
          to="/products"
          style={{
            background: 'none',
            border: 'none',
            color: '#C92071',
            fontSize: '16px',
            cursor: 'pointer',
            textDecoration: 'none',
            marginRight:'90px',
            marginTop: '-27px',
          }}
        >
          Ver todos <span style={{ marginLeft: '8px' }}>→</span>
        </Link>
      </div>
      
      <div className="product-grid">
        {Array(6).fill().map((_, index) => (
          <Link
            to={`/product/${index + 1}`}
            key={index}
            className="product-item"
            style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <div className="product-square">
              {index < 2 && (
                <div className="discount-badge">30% OFF</div>
              )}
              <img
                src="https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small"
                alt={`Produto ${index + 1}`}
              />
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

export default ProductList;
