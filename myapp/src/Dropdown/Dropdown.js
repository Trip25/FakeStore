import React from 'react'
import {useState, useEffect} from "react";


export const Dropdown = ({handleChange}) => {
    const [categories, setCategories] = useState([])
    //this has nothing to do with the dropdown, its only calling the categories for each dropdown option
    useEffect (() => {
        async function getCategories() {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json();
        console.log(data);
        setCategories(data)

        }
        getCategories()
    }, []);
  return (
    <div >
    <select className = "dropdown" onChange={handleChange}>
    <option value="">Categories</option>
    {categories.map((category, i) => {
        return (
            <option key={i} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
        );
    })}
    </select>

    </div>
  )
}


  
export default Dropdown;
