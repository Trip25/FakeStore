import './App.css';
import Dropdown from './Dropdown/Dropdown';
import Gallery from './Gallery/Gallery';
import SearchBar from './searchBar';
import { useState,useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [userCategory, setUserCategory] = useState('');

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
  console.log(userCategory)
  return (
    <div className="App">
        <nav className="navbar">
      <h1 className="title">School of Shopping</h1>    
        </nav> 
        
        <div className = "search"> 
      <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}  />
      <Dropdown handleChange={handleChange}/>
      </div>
      <Gallery searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} data={data}/>
    </div>
  );
}

export default App;