import Products from './Products';
import React from 'react';

function Main({ products, selectedSizes, handleAddToCart }) {
  return (
    <>
      <div className="main flex-80">
        <Products
          data={products}
          selectedSizes={selectedSizes}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
}

export default Main;
