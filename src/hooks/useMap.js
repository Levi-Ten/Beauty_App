import React, { useContext } from 'react'
import { BeautyshopContext } from '../api/ApiContext'
import BrandCard from '../layouts/BrandCard'

function useMap() {

  const { datas } = useContext(BeautyshopContext)

  const alldata = datas?.map((data, data_id) => {

    return <BrandCard key={data.id} image={data.image_link} website={data.website_link} productsite={data.product_link} brand={data.brand} name={data.name}
      type={data.product_type} rate={data.rating} 
      price={data.price} description={data.description} />
  }) 

  return [alldata] 
  
}

export default useMap