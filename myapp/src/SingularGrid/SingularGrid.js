//photo
//item
//price

import React from 'react'

export default function SingularGrid({image, title, description, price}) {
  return (
    <div className="SingularGrid">
        <img src = {image} />
        <p>{title}</p>
        <p>{description}</p>
        <p>£{price}</p>
    </div>
  )
}
