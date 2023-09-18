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
    <div className="business-header">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
    </div>
    <div className="business-address">
      <h3>{business.address}</h3>
      <h3>{business.city}</h3>
      <h3>{business.state} {business.zipCode}</h3>
    </div>
    <div className="business-reviews">
      <div className="business-reviews-details">
        <h3>{business.category}</h3>
        <h3 className="rating">{business.rating} stars</h3>
        <h3>{business.reviewCount} reviews</h3>
      </div>
   </div>
</div>
);
}

// Export the Business component to make it available for use in other parts of the application
export default Business;
