// src/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex align-items-center">
              <img src={item.imageUrl} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
              <div className="me-auto">
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item)} className="btn btn-danger btn-sm">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
