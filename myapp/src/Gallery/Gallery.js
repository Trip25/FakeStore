//CALL API IN GALLERY

import React from 'react'
import { useEffect, useState } from 'react';
import SingularGrid from '../SingularGrid/SingularGrid';

function Gallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  const selectedProducts = products.slice(0, Math.min(products.length, 6));

  return (
    <div >
      <nav>
      </nav>

      {<h2>
      </h2>}
      <div className="landing-page">
        {selectedProducts.map(product => (
            <SingularGrid title={product.title} image={product.image} description = {product.description} price = {product.price.toFixed(2)}/>
        ))}
   
      </div>
    </div>
  );
}

export default Gallery;