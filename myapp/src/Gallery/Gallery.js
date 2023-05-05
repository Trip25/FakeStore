

import React from 'react'
import { useEffect, useState } from 'react';
import SingularGrid from '../SingularGrid/SingularGrid';
import '../App.css';


function Gallery({searchTerm, setSearchTerm, data}) {
  const [products, setProducts] = useState([]);

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div >
      <div className="landing-page">
        {filteredData.map(product => (
            <SingularGrid title={product.title} image={product.image} description = {product.description} price = {product.price.toFixed(2)}/>
        ))}
   
      </div>
    </div>
  );
}

export default Gallery;