import React from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = () => {

  const featuredProducts = [
    {
      id: 1,
      image: 'https://pbs.twimg.com/media/GbULIhsWQAEcoym?format=png&name=360x360',
      label: 'Novo drop',
      subLabel: 'Supreme',
    },
    {
      id: 2,
      image: 'https://pbs.twimg.com/media/GbUNW__XIAAYN_u?format=png&name=360x360',
      label: 'Coleção',
      subLabel: 'Adidas',
    },
    {
      id: 3,
      image: 'data:image/jpeg;base64,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',
      label: 'Novo',
      subLabel: 'Beats Bass',
    },
  ];

  return (
    <div className="highlight-collection">
      <h1 style={{ marginTop: '100px', color: '#474747', fontSize: '25px' }}>
        Coleções em destaque
      </h1>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div style={{ marginTop: '20px', marginLeft: '15px' }} className="discount-badge">30% OFF</div>
            <div className="product-info" style={{ textAlign: 'center' }}>
              {product.image && <img src={product.image} alt={`Produto ${product.id}`} className="product-image" />}
              <p className="new-drop" style={{ fontWeight: 'bold' }}>
                {product.label}
                <br />
                {product.subLabel}
              </p>
              <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="add-to-cart-button">Comprar</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="collection-highlight">
        <h2 style={{ marginTop: '40px', color: '#474747' }}>Coleções em destaque</h2>
        <div className="icon-grid">
          <i style={{marginRight:'-500px'}} className="fas fa-tshirt icon" title="Camiseta"></i>
          <i style={{marginRight:'-500px'}}  className="fas fa-headphones-alt icon" title="Headphones"></i>
          <i className="fas fa-shoe-prints icon" title="Tênis"></i>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.array,
};

export default ProductCard;
