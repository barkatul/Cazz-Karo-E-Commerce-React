
import React from 'react';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img
          src={product.imageUrl}
          alt="Card Image"
          className="card-image"
        />
        <div className="card-details">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-description">{product.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
