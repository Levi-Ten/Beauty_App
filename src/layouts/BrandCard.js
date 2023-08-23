import React from 'react'

function BrandCard({name, img, price, description, brand, rating, colors, type}) {
  return (
    <div>
        <p>{name}</p>
        <img src={img} alt={type}/>
        <p>{price}</p>
        <p>{description}</p>
        <div>{brand}</div>
        <div>{rating}</div>
        <div>{colors}</div>
        <div>{type}</div>

    </div>
  )
}

export default BrandCard