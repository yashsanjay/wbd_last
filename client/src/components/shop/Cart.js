// Cart.js

import React, { useEffect } from 'react';

const Cart = ({ cart,setCart }) => {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.cost , 0);
      };
      const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
      };
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    
  return (
    <>
    
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Cost: {item.cost.toFixed(2)}</p>
                {/* <p>Quantity: {item.quantity}</p> */}
                {/* <p>Total: {(item.cost ).toFixed(2)}</p> */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            Total: {calculateTotal().toFixed(2)}
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;