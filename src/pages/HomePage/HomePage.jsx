import React from 'react';
import ProductOferta from '../../components/ProductOferta/ProductOferta';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductList from '../../components/ProductList/ProductList'; 
import OfertaEspecial from '../../components/OfertaEspecial/OfertaEspecial';

const HomePage = () => {
  return (
    <div className="home">
      {}
      <ProductOferta />
      {}
      <ProductCard />
      {}
      <ProductList />
       {}
       <OfertaEspecial />

    </div>
  );
};

export default HomePage;
