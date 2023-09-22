import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';
import { getSearch } from './utils/API';



function App() {

  const [restaurants, setRestaurants] = useState([]);

  const searchYelp = async (searchTerm, searchLocation, sortBy) => {
    console.log('button clicked');
    
    try {
      const searchData = await getSearch(searchTerm, searchLocation, sortBy);
      console.log('searchData:', searchData);
  
      if (searchData) {
        console.log('Received data from Yelp:', searchData);
        setRestaurants(searchData);
      } else {
        console.log('Search data not available.');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  // Call the searchYelp function when the component mounts with default values
  useEffect(() => {
    searchYelp('pizza', 'New York', 'best_match');
  }, []);

  return (
    <div className="App">
      <h1>Ravenous!</h1>
      <br/>
      {/* Render the SearchBar component */}
      <SearchBar onSearch={searchYelp} />

      <section>
        {/* Render the BusinessList component */}
        <BusinessList restaurants={restaurants} />
      </section>
    </div>
  );
}

export default App;
