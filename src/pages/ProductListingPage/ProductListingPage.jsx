import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import CardProdutosLista from '../../components/CardProdutosLista/CardProdutosLista';

const ProductListingPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Mais Relevantes');

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
    console.log(`Ordenando por: ${option}`);
  };

  return (
    <div style={{ padding: '20px', marginTop: '-20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            {searchTerm ? (
              <>
                {searchTerm.toLowerCase() === 'tênis' ? (
                  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Resultado para "tênis"
                  </p>
                ) : (
                  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Não encontramos o produto.
                  </p>
                )}
              </>
            ) : (
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              </p>
            )}
          </div>

          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              style={{ padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <strong>Ordenar por:</strong> <span style={{ marginLeft: '10px' }}>{sortOption}</span> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '16px', height: '16px', marginLeft: '5px' }}>
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div style={{
                position: 'absolute', 
                backgroundColor: 'white', 
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                zIndex: 1
              }}>
                <button onClick={() => handleSortChange('Mais Relevantes')} style={{ width: '100%', padding: '10px', textAlign: 'left' }}>
                  Mais Relevantes
                </button>
                <button onClick={() => handleSortChange('Preço')} style={{ width: '100%', padding: '10px', textAlign: 'left' }}>
                  Preço
                </button>
                <button onClick={() => handleSortChange('Avaliações')} style={{ width: '100%', padding: '10px', textAlign: 'left' }}>
                  Avaliações
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FilterGroup /> {}
      <CardProdutosLista /> {}
    </div>
  );
};

export default ProductListingPage;
