//photo
//item
//price

import React from 'react'

export default function SingularGrid({image, title}) {
  return (
    <div>
        <img src = {image} />
        <p>{title}</p>
    </div>
  )
}
