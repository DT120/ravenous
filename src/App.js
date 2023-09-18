import React from 'react';
import './App.css';

// Import components
import SearchBar from './SearchBar';
import Business from './Business';
import BusinessList from './BusinessList';

function App() {
  return (
    <div className="App">
      {/* Render the SearchBar component */}
      <SearchBar />

      <section>
        {/* Render the Business component */}
        <Business />
      </section>

      <section>
        {/* Render the BusinessList component */}
        <BusinessList />
      </section>
    </div>
  );
}

export default App;
