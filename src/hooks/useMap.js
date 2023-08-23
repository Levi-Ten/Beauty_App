import React, { useContext } from 'react'
import { MyApiContext } from '../api/ApiContext'
import BrandCard from '../layouts/BrandCard'

function useMap() {
  const { data } = useContext(MyApiContext)
  console.log(data)
  const getData = data.map((el) => {
    return <BrandCard name={el.name} img={el.image_link} 
    price={el.price} description={el.description} 
    brand={el.brand} rating={el.rating} 
    type={el.product_type} prodLink={el.product_link} 
    webLink={el.website_link}/>
  })
  //colors, type

  return (
    [getData]
  )
}

export default useMap