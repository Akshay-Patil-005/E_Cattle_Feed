import React, { useContext } from 'react';
import '../Components/Khadya/khadya.css';
import product from '../Components/Assets/Product';
// import product1 from '../Components/Assets/dhanya/dhanya';
// import product2 from '../Components/Assets/khat/khat';
import { CartContext } from '../Context/CartContext'; // Import CartContext

const Khad = () => {
  const { addToCart } = useContext(CartContext); // Use addToCart function from CartContext

  // Concatenate the three arrays before calling map
  const allProducts = [...product];
  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to the cart!`);
  };

  return (
    <div className="foodShow">
      <h1>
        आपुले <span>पशुखाद्य</span>
      </h1>
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
                <style>{'₹'}</style> {item.price}
              </p>

              <button onClick={() => console.log('More info button clicked')}>
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

export default Khad;
