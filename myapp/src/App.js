import './App.css';
import Gallery from './Gallery/Gallery';
import SearchBar  from './searchBar';

function App() {
  return (
    <div className="App">
          { <h1 className = "title">School of Shopping</h1> }
    <SearchBar/>
    <Gallery/>

      </div>
  );
}

export default App;
