import React from 'react';
import Business from './Business';

// Define the BusinessList component as a functional component
const BusinessList = (props) => {
  const { restaurants } = props;

  return (
    <div className="business-list">
      {/* Map through the restaurants array and render Business components */}
      {restaurants.map((restaurant) => (
        <Business key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}

export default BusinessList;
