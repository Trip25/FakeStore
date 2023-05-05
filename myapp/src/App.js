import './App.css';
import Gallery from './Gallery/Gallery';
import SearchBar from './searchBar';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <h1 className="title">School of Shopping</h1>
      <div className="nav"></div>
      <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <Gallery searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
    </div>
  );
}

export default App;