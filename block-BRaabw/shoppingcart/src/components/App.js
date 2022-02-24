import { products } from './data.json';
import { useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import Cart from './Cart';

function App() {
  let [selectedSizes, setSelectedSizes] = useState([]);
  let [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (p) => {
    let isPresent =
      cartItems.findIndex((product) => product.id === p.id) !== -1;
    if (isPresent) {
      incrementQuantity(p.id);
    } else {
      setCartItems((cartItems) => cartItems.concat({ ...p, quantity: 1 }));
    }
  };

  const incrementQuantity = (id) => {
    setCartItems((cartItems) => {
      let updatedCartItem = cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      return updatedCartItem;
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((cartItems) => {
      let updatedCartItem = cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      return updatedCartItem;
    });
  };

  const deleteItem = (id) => {
    setCartItems((cartItems) => {
      let updatedCartItem = cartItems.filter((p) => {
        return p.id !== id;
      });
      return updatedCartItem;
    });
  };

  const handleClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((selectedSizes) =>
        selectedSizes.filter((s) => s !== size)
      );
    } else {
      setSelectedSizes((selectedSizes) => selectedSizes.concat(size));
    }
  };

  return (
    <>
      <div className="wrapper flex space-between">
        <Sidebar
          products={products}
          selectedSizes={selectedSizes}
          handleClick={handleClick}
        />
        <Main
          products={products}
          selectedSizes={selectedSizes}
          handleAddToCart={handleAddToCart}
        />
        <Cart
          cartItems={cartItems}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
}

export default App;
