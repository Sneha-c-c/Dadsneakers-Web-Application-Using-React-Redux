import React, { useState } from 'react';
import './Styles/SearchBar.css';

const SearchBar = ({ setResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = (searchTerm) => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data?.products || []);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    fetchData(searchTerm);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
