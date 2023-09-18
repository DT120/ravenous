import React, { useState } from 'react';

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
  };

  // Handle the search button click
  const handleSearch = () => {
    // Call the onSearch callback with search term, location, and sort option
    onSearch({ searchTerm, searchLocation, sortBy });
  };

  // Define sorting options as an object
  const sortingOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
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
      />
      {/* Input for the location */}
      <input
        type="text"
        name="location"
        placeholder="Location..."
        value={searchLocation}
        onChange={handleInputChange}
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application
