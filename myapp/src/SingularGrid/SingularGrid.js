//photo
//item
//price

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
