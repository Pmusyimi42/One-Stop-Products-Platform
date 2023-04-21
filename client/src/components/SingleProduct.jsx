import React, { useState } from "react";
import "./SingleProduct.css";

export default function SingleProduct() {
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
        <img src="https://shorturl.at/koAHP" alt="test" />
        <div>
          <h2 className="title">Air Jordan Sneakers | Flight Club</h2>
          <h3>Price $ 50</h3>
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
        <p>
          Michael Jordan entered the NBA with the Chicago Bulls, taking over the league with graceful athleticism and a driving will to win. 
          Starting his rookie year, the Air Jordan 1 featured both the Wings and Swoosh logo, and Nike Air cushioning underfoot. 
          Subsequent models like the Air Jordan 3, Air Jordan 4 and Air Jordan 11 featured new technology and bold design, 
          keeping the lineage relevant to each new generation. Since 1985, Air Jordans have transcended basketball, 
          moving sneakers to the forefront of culture with new releases and colorways such as the Jordan 1 High 'Skyline,' 
          Wmns Jordan 3 'Lucky Green' and Jordan 1 High 'Lucky Green.'
        </p>
      </div>
    </div>
  );
}
