

import React from 'react'
import { useEffect, useState } from 'react';
import SingularGrid from '../SingularGrid/SingularGrid';
import '../App.css';
import Button from '../AddToCart/Button';


function Gallery({searchTerm, setSearchTerm, data}) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div >
      <div className="landing-page">
        {filteredData.map(product => (
            
            <><div className='item-card'>
            <SingularGrid title={product.title} image={product.image} description={product.description} price={product.price.toFixed(2)} />
            <span>
              <Button className="add-to-cart-button" title="Add To Cart" product={filteredData} setCart={setCart} />
            </span>
          </div></>
        
        ))}
       
      </div>
    </div>
  );
}

export default Gallery;