import React from 'react';

const FilterGroup = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      marginTop: '20px',
      marginLeft: '-10px',
      height: '700px',
      width: '200px',
      minHeight: '150px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ marginLeft: '-2px', marginTop: '-10px', fontWeight: 'normal', fontSize: '14px' }}>Filtrar por</h3>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: '#ccc',
        margin: '10px 0',
      }} />
      
      <h4 style={{ margin: '0', fontWeight: 'normal', fontSize: '18px' }}>Marca</h4>
      {['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma'].map((brand, index) => (
        <div key={index} style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            style={{
              width: '15px',
              height: '15px',
              marginRight: '10px',
              accentColor: '#C92071',
              marginLeft: '-1px'
            }}
          />
          <label style={{ fontSize: '14px' }}>{brand}</label>
        </div>
      ))}

      <h4 style={{ margin: '10px 0 0 0', fontWeight: 'normal', fontSize: '18px', marginTop: '8px' }}>Categoria</h4>
      {['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'].map((category, index) => (
        <div key={index} style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            style={{
              width: '15px',
              height: '15px',
              marginRight: '10px',
              accentColor: '#C92071',
              marginLeft: '-1px'
            }}
          />
          <label style={{ fontSize: '14px' }}>{category}</label>
        </div>
      ))}

      <h4 style={{ margin: '10px 0 0 0', fontWeight: 'normal', fontSize: '18px', marginTop: '8px' }}>Gênero</h4>
      {['Masculino', 'Feminino', 'Unisex'].map((gender, index) => (
        <div key={index} style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            style={{
              width: '15px',
              height: '15px',
              marginRight: '10px',
              accentColor: '#C92071',
              marginLeft: '-1px'
            }}
          />
          <label style={{ fontSize: '14px' }}>{gender}</label>
        </div>
      ))}

      <h4 style={{ margin: '10px 0 0 0', fontWeight: 'normal', fontSize: '18px', marginTop: '8px' }}>Estado</h4>
      {['Novo', 'Usado'].map((status, index) => (
        <div key={index} style={{ padding: '8px 0', display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            name="estado" // Agrupa os botões de rádio
            style={{
              width: '15px',
              height: '15px',
              marginRight: '10px',
              accentColor: '#C92071',
              marginLeft: '-1px',
              marginTop:'-2px'
            }}
          />
          <label style={{ fontSize: '14px' }}>{status}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterGroup;
