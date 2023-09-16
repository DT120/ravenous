const Business = () => {
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
    
      return (
        <div className="business">
          <div className="image-container">
            <img src={business.imageSrc} alt={business.name} />
          </div>
          <h2>{business.name}</h2>
          <div className="business-information">
            <div className="business-address">
              <p>{business.address}</p>
              <p>{business.city}, {business.state} {business.zipCode}</p>
            </div>
            <div className="business-reviews">
              <h3>{business.category}</h3>
              <h3 className="rating">{business.rating} stars</h3>
              <p>{business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      );
    }
 
export default Business;