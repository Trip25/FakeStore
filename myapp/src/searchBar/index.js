import React, { useState, useEffect } from 'react';


function SearchBar({searchTerm, setSearchTerm}) {
  
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <input type="text"  value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
