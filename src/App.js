import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './Product/ProductList';

function App() {
  return (
    <Container>
      <h1 className="my-4">E-commerce Website</h1>
      <ProductList />
    </Container>
  );
}

export default App;
