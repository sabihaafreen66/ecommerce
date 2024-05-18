// src/App.js
import React from 'react';
import { CartProvider } from './Product/CartContext';
import Product from './Product/Product';
import Cart from './Product/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          <Product title="Colors" price={100} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
          <Product title="Black and white Colors" price={50} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
          <Product title="Yellow and Black Colors" price={70} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
