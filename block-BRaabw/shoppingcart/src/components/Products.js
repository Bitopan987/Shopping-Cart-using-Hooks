import React from 'react';
import { useState } from 'react';
import OrderBy from './OrderBy';

function Products({ selectedSizes, handleAddToCart, data }) {
  let [selectedOrder, setSelectedOrder] = useState('');
  const handleOrderBy = (event) => {
    setSelectedOrder(event.target.value);
  };
  const handleOrderProducts = (order, sizes, products) => {
    let sortedProducts = [...products];
    if (sizes.length > 0) {
      // eslint-disable-next-line array-callback-return
      sortedProducts = sortedProducts.filter((p) => {
        for (const size of sizes) {
          if (p.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }

    if (order === 'highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === 'lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  let products = handleOrderProducts(selectedOrder, selectedSizes, data);

  return (
    <>
      <div>
        <div className="products-filter">
          <p>{`${data.length} Product${data.length > 1 ? 's' : ''} found.`} </p>
          <OrderBy
            selectedOrder={selectedOrder}
            handleOrderBy={handleOrderBy}
          />
        </div>
        <div className="flex wrap">
          {products.map((product, id) => (
            <Product key={id} {...product} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button onClick={() => props.handleAddToCart(props)}>
          Add To Cart{' '}
        </button>
      </div>
    </div>
  );
}

export default Products;
