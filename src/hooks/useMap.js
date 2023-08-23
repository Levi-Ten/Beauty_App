import React, { useContext } from 'react'
import { MyApiContext } from '../api/ApiContext'
import BrandCard from '../layouts/BrandCard'

function useMap() {
    const { data } = useContext(MyApiContext)
    const getData = data.map( (el) => {
      return <BrandCard name={el.name} img={el.image_link} price={el.price} description={el.description} brand={el.brand} rating={el.rating} type={el.product_type}/>
    })
    //colors, type
    console.log(getData)
  
  return (
    [getData]
  )
}

export default useMap