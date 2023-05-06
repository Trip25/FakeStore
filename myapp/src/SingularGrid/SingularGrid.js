/*PLAN
1. Create a singular grid component
this will be used to display the items in the grid
Need the item photo, title, price in £
*/

import React from 'react'

export default function SingularGrid({ image, title, description, price }) {
  return (
    <div className="SingularGrid">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>£{price}</p>

    </div>

  )
}
