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
      <div className="landing-page">
        <h1>School of Shopping</h1>
        {selectedProducts.map(product => (
            <SingularGrid title={product.title} image={product.image}/>
        ))}
        {/* <div className="product-list">
          {selectedProducts.map(product => (
            <div className="product" key={product.id}>
              <img src={product.image}/> <p>{product.title}</p> <p>{product.description}</p><p>£{product.price.toFixed(2)}</p>

            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;