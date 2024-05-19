import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Product/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <iframe title="Home Page" src="https://prasadyash2411.github.io/ecom-website/index.html#" width="100%" height="800px" frameBorder="0"></iframe>
    </div>
  );
};

const Store = () => {
  return (
    <div>
      <iframe title="Store Page" src="https://prasadyash2411.github.io/ecom-website/dynamicstore.html" width="100%" height="800px" frameBorder="0"></iframe>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <iframe title="About Page" src="https://prasadyash2411.github.io/ecom-website/about.html" width="100%" height="800px" frameBorder="0"></iframe>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="container">
          <header className="my-4">
            <h1>My E-commerce Store</h1>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
