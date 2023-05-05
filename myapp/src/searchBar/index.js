import React, { useState, useEffect } from 'react';


function SearchBar({searchTerm, setSearchTerm}) {
  
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>

      <input placeholder='Search Product' type="text"  value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
