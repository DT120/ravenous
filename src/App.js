import logo from './logo.svg';
import './App.css';
import Business from './Business'
import BusinessList from './BusinessList'

function App() {
  return (
    <div className="App">
      <section>
        <Business/>
      </section>
      <section>
        <BusinessList />
      </section>
    </div>
  );
}

export default App;
