import React from 'react';
import { Link } from 'react-router-dom'; 
import './OfertaEspecial.css'; 

const OfertaEspecial = () => {
  return (
    <div className="oferta-especial">
      <img 
        src="https://pbs.twimg.com/media/GbVI-OMWwAAUGCQ?format=png&name=small" 
        alt="Oferta Especial" 
        className="oferta-image"
      />
      <div className="oferta-text">
        <h2 style={{color: '#C92071', fontSize: '14px', marginTop: '-80px'}}>Oferta especial</h2>
        <h2 style={{fontWeight: 'bold', fontSize: '30px'}}>Air Jordan edição de <br />colecionador</h2>
        <p style={{fontWeight: 'normal'}}>Desconto de até 50% em produtos selecionados. <br /> Não perca essa oportunidade!</p>
        <Link to="/products">
          <button className="btn-ver-oferta">Ver Oferta</button> {}
        </Link>
      </div>
    </div>
  );
};

export default OfertaEspecial;
