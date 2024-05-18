import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeItem = (index) => {
    setCartElements(cartElements.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={toggleCart} className="btn btn-primary">
        <i className={`bi ${isCartOpen ? 'bi-cart-dash' : 'bi-cart'}`}></i>
      </button>
      {isCartOpen && (
        <div className="cart mt-3">
          {cartElements.map((item, index) => (
            <div key={index} className="cart-item d-flex align-items-center mb-3">
              <img src={item.imageUrl} alt={item.title} className="me-3" style={{ maxWidth: '100px' }} />
              <div>
                <h2 className="h5">{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeItem(index)} className="btn btn-danger">Remove item</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
