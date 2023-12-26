// Cart.jsx

import React from 'react';
import './CSS/Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product A', price: 20, quantity: 2 },
    { id: 2, name: 'Product B', price: 30, quantity: 1 },
    // Add more items as needed
  ];

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price * item.quantity}</span>
                <button>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <p>Total: $100</p>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
