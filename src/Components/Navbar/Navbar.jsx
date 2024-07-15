// Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cart from './cart.jpg';
import { CartContext } from '../../Context/CartContext';
import product from '../Assets/Product'; // Adjust the path

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic
    const results = product.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log('Search Results:', results);
    // You can use the search results as needed, e.g., navigate to a search results page
  };

  return (
    <div className="main">
      <div id="header">
        <div className="nav">
          <ul>
            <li>
              <Link to='./Dhanya'>धान्य</Link>
            </li>
            <li>
              <Link to='/Khat'>सेंद्रिय खते</Link>
            </li>
            <li>
              <Link to='/'>खाद्य </Link>
            </li>
            <li>
              <Link to='/SellForm'>केंद्र </Link>
            </li>
            <li>
              <Link to='/Cart'>
                <i className='fa fa-shopping-cart'></i>
                <img src={cart} alt="50%" />
                <div className="nav-cart-count">{cartCount}</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="searchSection">
        <h1>
          <span>पशु अहार</span> शोधा
        </h1>
        <div>
          <input type="search" placeholder="पशुखाद्य शोधा" id="search" />
          <a href="index.html" id="other">
            <i className="fa-solid fa-arrows-rotate"></i>
          </a>
        </div>
        
        <button onClick={handleSearch} id="searchBtn">
          शोधा
        </button>
        
      </div>

        
      </div>
  );
};

export default Navbar;