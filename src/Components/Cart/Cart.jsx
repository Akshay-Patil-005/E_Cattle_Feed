import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to the cart!`);
  };

  const cartItemsList = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <div className="item-info">
        <span>{item.name}</span>
        <span>₹{parseFloat(item.price.replace(/[^\d.]/g, ''))}</span>
      </div>
      <div className="image">
        {/* Display the image using the <img> tag */}
        <img src={item.image} alt={item.name} style={{width:250}} />
      </div>
      <div className="quantity">
        {item.quantity > 0 && (
          <button onClick={() => removeFromCart(item.id)}>-</button>
        )}
        <span>{item.quantity}</span>
        <button onClick={() => handleAddToCart(item)}>+</button>
      </div>
    </div>
  ));

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>खरेदी</h2>
      <br />
      {cartItems.length ? cartItemsList : <p>खरेदी वॉलेट रिकामे </p>}
      <br />
      <div className="total">एकुण : ₹{totalPrice.toFixed(2)}</div>
      <br />
      <div className="payment">
        <button className="button">खरेदी करा</button>
      </div>
    </div>
  );
};

export default Cart;