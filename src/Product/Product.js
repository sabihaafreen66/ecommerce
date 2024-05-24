import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.name} />
      </Link>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
