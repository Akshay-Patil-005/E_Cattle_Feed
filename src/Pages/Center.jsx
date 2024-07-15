// Center.jsx
import React, { useState } from 'react';
import product from '../Components/Assets/Product'; // Adjust the path

const Center = ({ addToCart, removeFromCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = () => {
    const results = product.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleSort = () => {
    // Define your sorting logic here
    // For example, you can sort the product array based on some criteria
    const sortedProducts = [...product];
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price.localeCompare(b.price));
    } else {
      sortedProducts.sort((a, b) => b.price.localeCompare(a.price));
    }

    // Update the state with the sorted products
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSearchResults(sortedProducts);
  };

  return (
    <div className="center">
      {/* Your JSX here */}
    </div>
  );
};

export default Center;
