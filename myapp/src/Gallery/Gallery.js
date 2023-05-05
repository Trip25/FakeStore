//CALL API IN GALLERY

import React from 'react'
import { useEffect, useState } from 'react';
import SingularGrid from '../SingularGrid/SingularGrid';



function Gallery({searchTerm, setSearchTerm, data}) {
  const [products, setProducts] = useState([]);


  

  
  
  //const selectedProducts = products.slice(0, Math.min(products.length, 20));
  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div >
      <nav>
      </nav>

      {<h2>
      </h2>}
      <div className="landing-page">
        {filteredData.map(product => (
            <SingularGrid title={product.title} image={product.image} description = {product.description} price = {product.price.toFixed(2)}/>
        ))}
   
      </div>
    </div>
  );
}

export default Gallery;