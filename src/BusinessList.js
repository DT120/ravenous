import Business from "./Business"; // Import the Business component

// Define the BusinessList component as a functional component
const BusinessList = () => {
  // Define an array of businesses with sample data
  const businesses = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]
    // Add more business objects with sample data as needed
;

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
