import React, { useContext } from 'react'
import { MyApiContext } from '../api/ApiContext'
import BrandCard from '../layouts/BrandCard'
import ColorsBlock from '../layouts/ColorsBlock'

function useMap() {
  const { data } = useContext(MyApiContext)
  const colors = data.map(e => e.product_colors).map(e => e.map(e => {
    return <ColorsBlock nameColor={e.colour_name} />
  }))

  const getData = data.map((el, i) => {
    return <BrandCard key={i} name={el.name} img={el.image_link}
      price={el.price} description={el.description}
      brand={el.brand} rating={el.rating}
      type={el.product_type} prodLink={el.product_link}
      webLink={el.website_link} />
  })

  return [getData, colors]
}

export default useMap