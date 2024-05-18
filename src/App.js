import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './Product/ProductList';
import Cart from './Product/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <Container>
      <Cart/>
            <h1 className="my-4">E-commerce Website</h1>
      <ProductList />
    </Container>
  );
}

export default App;
