import Business from "./Business"; // Import the Business component

// Define the BusinessList component as a functional component
const BusinessList = () => {
  // Define an array of businesses with sample data
  const businesses = [
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
    // Add more business objects with sample data as needed
  ];

  return (
    <div className="business-list">
      {/* Map through the businesses array and render Business components */}
      {businesses.map((business) => (
        <Business key={business.id} {...business} />
      ))}
    </div>
  );
}

export default BusinessList; // Export the BusinessList component for use in other parts of the application
