import React from 'react';

// Define the Business component as a functional component
const Business = () => {
  // Create a JavaScript object to represent business data
  const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  };

  // Render the business information using JSX
  return (
    <div className="business">
      <div className="image-container">
        {/* Display the business image with alt text */}
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="business-information">
        <div className="business-address">
          {/* Display the address, city, state, and zip code */}
          <p>{business.address}</p>
          <p>{business.city}, {business.state} {business.zipCode}</p>
        </div>
        <div className="business-reviews">
          <h3>{business.category}</h3>
          {/* Display the rating and review count */}
          <h3 className="rating">{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

// Export the Business component to make it available for use in other parts of the application
export default Business;
