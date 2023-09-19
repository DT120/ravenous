import React from 'react';

// Define the Business component as a functional component
const Business = (props) => {
  // Destructure the restaurant object from props
  const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = props;

  // Render the business information using JSX
  return (
    <div className="business">
      <div className="business-header">
        <div className="image-container">
          <img src={imageSrc} alt={name} />
        </div>
        <h2>{name}</h2>
      </div>
      <div className="business-address">
        <h3>{address}</h3>
        <h3>{city}</h3>
        <h3>{state} {zipCode}</h3>
      </div>
      <div className="business-reviews">
        <div className="business-reviews-details">
          <h3>{category}</h3>
          <h3 className="rating">{rating} stars</h3>
          <h3>{reviewCount} reviews</h3>
        </div>
      </div>
    </div>
  );
}

export default Business;
