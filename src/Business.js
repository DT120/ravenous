import React from 'react';

// Define the Business component as a functional component
const Business = (props) => {
  // Destructure the restaurant object from props
  const {
    imageSrc,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
    distance,
    url,
  } = props;

  // Create the Google Maps URL for the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address}, ${city}, ${state} ${zipCode}`
  )}`;

  // Render the business information using JSX
  return (
    <div className="business">
      <div className="business-header">
        <div className="image-container">
          {/* Wrap the image in an anchor tag with the business's website URL */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc} alt={name} />
          </a>
        </div>
        {/* Wrap the business name in an anchor tag with styles to remove underlines */}
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <h2 title={name}>{name}</h2>
        </a>
      </div>
      <div className="business-info">
        <div className="business-address">
          {/* Wrap the address in an anchor tag to open in Google Maps */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <p>{address}</p>
            <p>{city}</p>
            <p>{state} {zipCode}</p>
            <p>{Math.round((distance * 0.0006213712) * 10) / 10} mi.</p>
          </a>
        </div>
        <div className="business-reviews">
          <p>{category}</p>
          <p className="rating">{rating} stars</p>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
