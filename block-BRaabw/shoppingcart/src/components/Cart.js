import React from 'react';
import { useState } from 'react';
import CartItem from './CartItem';

function Cart({ incrementQuantity, decrementQuantity, deleteItem, cartItems }) {
  let [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };

  let totalQuantity = cartItems.reduce((acc, cv) => {
    acc = acc + cv.quantity;
    return acc;
  }, 0);

  let totalAmount = cartItems.reduce((acc, cv) => {
    acc = acc + cv.price * cv.quantity;
    return acc;
  }, 0);

  if (!isOpen) {
    return <ClosedCart open={open} totalQuantity={totalQuantity} />;
  }
  return (
    <>
      <aside className="cart">
        <div onClick={close} className="close-btn">
          X
        </div>
        <div className="cart-body">
          <div className="cart-heading">
            <div className="cart-icon-inner">
              <img alt="" src="/static/trolley.png" />
            </div>
            <span className="item-count">{totalQuantity}</span>
          </div>
          <h2>Cart</h2>
        </div>
        {cartItems.map((item, id) => {
          return (
            <CartItem
              key={id}
              {...item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              deleteItem={deleteItem}
            />
          );
        })}
        <div className="cart-checkout">
          <div className="flex justify-between">
            <p>SUBTOTAL</p>
            <p>$ {totalAmount}</p>
          </div>
        </div>
        <div className="center">
          <button
            onClick={() => alert(`Total amount is:$ ${totalAmount}`)}
            className="btn-check"
          >
            CHECKOUT
          </button>
        </div>
      </aside>
    </>
  );
}

function ClosedCart(props) {
  return (
    <div className="close-cart">
      <span onClick={props.open} className="open-btn">
        <div className="cart-icon">
          <img alt="cart" src="/static/trolley.png" />
          <span className="item-count">{props.totalQuantity}</span>
        </div>
      </span>
    </div>
  );
}

export default Cart;
