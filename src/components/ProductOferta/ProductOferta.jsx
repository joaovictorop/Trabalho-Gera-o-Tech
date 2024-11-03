import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './ProductOferta.css';

const images = [
  "https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small",
  "https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small",
  "https://pbs.twimg.com/media/GbQthcoWAAAS0Qc?format=png&name=small"
];

const ProductOferta = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="product-oferta">
      <div className="left-panel">
        <p style={{ color: '#F6AA1C', marginLeft: '43px' }}>Melhores ofertas personalizadas</p>
        <h2 style={{ fontSize: '45px', marginLeft: '40px', marginTop: '15px' }}>
          Queima de <br /> Estoque Nike
        </h2>
        <p style={{ marginLeft: '40px', marginTop: '10px' }}>Aproveite ofertas imperdíveis!</p>
        <Link to="/products" style={{ 
          marginLeft: '40px', 
          marginTop: '30px', 
          textDecoration: 'none', 
          color: 'inherit'
        }}>
          <button className="offer-button">Ver Ofertas</button>
        </Link>
      </div>
      <div className="right-panel">
        <img
          src={images[currentIndex]} 
          alt="Air Jordan"
          className="shoe-image"
        />
        <div className="arrow-buttons">
          <button onClick={prevImage}>←</button>
          <button onClick={nextImage}>→</button>
        </div>
      </div>
      <div className="navigation-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)} 
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductOferta;
