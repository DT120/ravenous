import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';

const restaurants = [
  {
    id: 1,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  // Add more restaurant objects here if needed
];

function App() {
  return (
    <div className="App">
      {/* Render the SearchBar component */}
      <SearchBar />

      <section>
        {/* Render the BusinessList component */}
        <BusinessList restaurants={restaurants} />
      </section>
    </div>
  );
}

export default App;
