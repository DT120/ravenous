import React from 'react';
import Business from './Business';

// Define the BusinessList component as a functional component
const BusinessList = (props) => {
  const { restaurants } = props;

  // Log the received restaurants for debugging purposes
  console.log('Received restaurants in BusinessList:', restaurants);

  // Check if restaurants is undefined or empty
  if (!restaurants || restaurants.length === 0) {
    return <div>No restaurants found.</div>;
  }

  return (
    <div className="business-list">
      {/* Map through the restaurants array and render Business components */}
      {restaurants.map((restaurant) => (
        <Business
          key={restaurant.id}
          imageSrc={restaurant.image_url}
          name={restaurant.name}
          address={restaurant.location.address1}
          city={restaurant.location.city}
          state={restaurant.location.state}
          zipCode={restaurant.location.zip_code}
          category={restaurant.categories[0].title}
          rating={restaurant.rating}
          reviewCount={restaurant.review_count}
          distance={restaurant.distance}
          url={restaurant.url}
        />
      ))}
    </div>
  );
}

export default BusinessList;
