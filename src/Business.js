import React from 'react';

// Define the Business component as a functional component
const Business = (props) => {
  // Destructure the restaurant object from props
  const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount, distance, url} = props;

  // Create an anchor tag with the business's website URL
  const websiteLink = url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
  ) : null;

  // Create the Google Maps URL for the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address}, ${city}, ${state} ${zipCode}`
  )}`;

  // Render the business information using JSX
  return (
    <div className="business">
      <div className="business-header">
        <div className="image-container">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc} alt={name} />
          </a>
          
        </div>
        <h2>{name}</h2>
      </div>
      <div className="business-address">
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <h3>{address}</h3>
        <h3>{city}</h3>
        <h3>{state} {zipCode}</h3>
        <h3>{Math.round((distance * 0.0006213712) * 10) / 10} mi.</h3>
        </a>
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
