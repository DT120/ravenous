import logo from './logo.svg';
import './App.css';
import Business from './Business'

function App() {
  return (
    <div className="App">
      <section>
        <Business
        name="Sample Business"
        address="123 Main Street"
        city="Cityville"
        state="State"
        zipcode="12345"
        category="Fast Food"
        rating={4.5}
        reviewCount={123}
        imageUrl="https://example.com/business-image.jpg"
        />
      </section>
      
    </div>
  );
}

export default App;
