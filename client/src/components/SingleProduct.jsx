import React, { useState } from "react";
import "./SingleProduct.css";

export default function SingleProduct({ title, description, price, imageUrl }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div id="container">
      <div className="product-container">
        <img src={imageUrl} alt={title} />
        <div>
          <h2 className="title">{title}</h2>
          <h3>Price $ {price}</h3>
          <div className="quantity">
            <span>Qty:</span>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div className="description-container">
        <h2 className="description">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
