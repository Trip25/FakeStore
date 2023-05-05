import './App.css';
import Dropdown from './Dropdown/Dropdown';
import Gallery from './Gallery/Gallery';
import SearchBar from './searchBar';
import { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [userCategory, setUserCategory] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const url = userCategory
      ? `https://fakestoreapi.com/products/category/${userCategory}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, [userCategory]);

  function handleChange(event) {
    setUserCategory(event.target.value);
  }

  const lightStyles = {
    body: {
      margin: 0, 
      padding: 0,
      backgroundColor: '#fff',
      color: '#000',
    },
    // add other styles for light mode here
  };

  const darkStyles = {
    body: {
      margin: 0, 
      padding: 0,
      backgroundColor: '#14213D',
      color: '#E5E5E5',
    },
    // add other styles for dark mode here
  };

  return (
    <div className="App" style={darkMode ? darkStyles.body : lightStyles.body}>
      <nav className="navbar">
        <h1 className="title">School of Shopping</h1>
          <img src ='https://simg.nicepng.com/png/small/300-3002393_shopping-cart-icon-shopping-cart-icon-minimalist.png' className = "cart"/>    
          <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      </nav> 
        
      <div className="search"> 
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Dropdown handleChange={handleChange}/>
      </div>
      
      <Gallery searchTerm={searchTerm} setSearchTerm={setSearchTerm} data={data}/>
    </div>
  );
}

export default App;


