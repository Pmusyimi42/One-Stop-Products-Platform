import React, { useEffect, useState } from 'react';
import { BiMessageAdd, BiCommentMinus } from 'react-icons/bi';
import './Cart.css';

function Cart({ cart, changeQuantity, removeFromCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let price = 0;
      cart.forEach((item) => {
        price += item.quantity * parseFloat(item.price);
      });
      setTotalPrice(price);
    };

    calculateTotalPrice();
  }, [cart]);

  const handleCheckout = () => {
    // Implement checkout functionality here
    alert(`Checkout successful! Total price: $${totalPrice.toFixed(2)}`);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <div className="cart-products">
          {cart.map((cartItem, index) => (
            <CartItem
              product={cartItem}
              key={index}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          ))}
          <div className="cart-checkout">
            <div className="cart-total">
              <p className="cart-total-title">Total:</p>
              <p className="cart-total-price">{`$${totalPrice.toFixed(2)}`}</p>
            </div>
            <button className="cart-checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CartItem({ product, changeQuantity, removeFromCart }) {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`/products/${product.product_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data);
      });
  }, [product.product_id]);

  return (
    <div className="cart-item">
      {productDetails && (
        <>
          <img src={productDetails.imageUrl} alt={productDetails.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h2 className="cart-item-title">{productDetails.title}</h2>
            <div className="cart-item-quantity">
              <p className="cart-item-quantity-title">Quantity:</p>
              <div className="cart-item-quantity-controls">
                <button
                  className="cart-item-quantity-control"
                  onClick={() => {
                    changeQuantity(product.quantity + 1, product.id);
                  }}
                >
                  <BiMessageAdd />
                </button>
                <p className="cart-item-quantity-value">{product.quantity}</p>
                <button
                  className="cart-item-quantity-control"
                  onClick={() => {
                    if (product.quantity > 1) {
                      changeQuantity(product.quantity - 1, product.id);
                    }
                  }}
                >
                  <BiCommentMinus />
                </button>
              </div>
            </div>
            <div className="cart-item-price">
              <p className="cart-item-price-title">Price:</p>
              <p className="cart-item-price-value">{`$${(product.quantity * parseFloat(productDetails.price)).toFixed(2)}`}</p>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => {
                fetch(`/cart_items/${product.id}`, {
                  method: 'DELETE',
                })
                  .then((res) => res.json())
                  .then((data) => {
                    removeFromCart(product.id);
                  });
              }}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
