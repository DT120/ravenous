import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

// Define the SearchBar component as a functional component
const SearchBar = ({ onSearch }) => {
  // Define state variables using the useState hook
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  // Handle changes in the search input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'searchTerm') {
      setSearchTerm(value);
    } else if (name === 'location') {
      setSearchLocation(value);
    }
  };

  // Handle changes in the sorting dropdown
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    handleSearch();
  };

  // Handle the search button click
  const handleSearch = () => {
    console.log('searchTerm:', searchTerm);
    console.log('searchLocation:', searchLocation);
    console.log('sortBy:', sortBy);
    // Call the onSearch callback with search term, location, and sort option
    onSearch(searchTerm, searchLocation, sortBy);
  };

  // Handle search with 'Enter' click
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Define sorting options as an object
  const sortingOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
    'Distance': 'distance'
  };

  return (
    <div className="search-bar">
      {/* Search input for the search term */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {/* Input for the location */}
      <input
        type="text"
        name="location"
        placeholder="Location..."
        value={searchLocation}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {/* Dropdown menu for sorting options */}
      <select name="sortOptions" onChange={handleSortChange} value={sortBy}>
        {/* Map through sortingOptions to create dropdown options */}
        {Object.entries(sortingOptions).map(([optionName, optionValue]) => (
          <option key={optionValue} value={optionValue}>
            {optionName}
          </option>
        ))}
      </select>
      {/* Search button */}
      <button  onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application
