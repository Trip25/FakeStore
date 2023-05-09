import React from 'react';
import { useState } from 'react';

// Create a button component 
// Create a count state
// When we click the button, it will update the state 
// This should then be able to display the count aka how many items are in the cart

function Button(props) {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
      props.setCart((prevCart) => [...prevCart, props.product]);
    }
  
    return(
        <div>
        <button className="add-to-cart-button" onClick={handleClick}>{props.title}</button>
        </div>
    )
  }
  

export default Button;