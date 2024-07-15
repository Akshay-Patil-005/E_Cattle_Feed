import React, { useContext } from 'react';
import '../Components/Khadya/khadya.css';
import product2 from '../Components/Assets/khat/khat';
import { CartContext } from '../Context/CartContext'; // Import CartContext

const Khat = () => {
  const { addToCart } = useContext(CartContext); // Use addToCart function from CartContext

  // Concatenate the three arrays before calling map
  const allProducts = [ ...product2];
  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to the cart!`);
  };
  
  return (
    <div className="foodShow"> {/* Use "className" instead of "class" */}
      <h1>सेंद्रिय <style>{'₹'}</style> <span>खते</span></h1>
      <br />

      <div id="show">
        {allProducts.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="text">
              <h3>
                <span>{item.name}</span>
              </h3>
            </div>

            <div className="price">
              <p>
                <span>{'₹'}</span> {item.price}
              </p>

              <button>
                आधिक माहिती
              </button>
              <button onClick={() => handleAddToCart(item)}>
                खरेदी 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Khat;
