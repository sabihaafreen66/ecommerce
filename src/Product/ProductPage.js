// ProductPage.js
import React from 'react';

const ProductPage = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        {product.images.map(image => (
          <img src={image} alt={product.name} key={image} />
        ))}
      </div>
      <h3>Reviews</h3>
      <ul>
        {product.reviews.map(review => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
