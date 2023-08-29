import React, { useContext, useEffect, useState } from 'react'
import { GET_MAKEUPURL } from './ApiUrl'
import axios from 'axios'
import BrandCard from '../layouts/BrandCard'
import { BeautyshopContext } from './ApiContext'
import ColorsBlock from '../layouts/ColorsBlock'

function Api() {

const { datas} = useContext(BeautyshopContext)

const alldata = datas.map((data, data_id) => {
return <BrandCard image={data.image_link}  website={data.website_link} productsite={data.product_link} brand={data.brand} name={data.name} type={data.product_type} rate={data.rating} 
price={data.price} description={data.description} />
})

// const colors = datas.product_colors

// const colorbase = colors.map((color, color_id) => {
//   return <ColorsBlock color={color.hex_value} color_name={color.colour_name} />
// })

console.log(datas)
  return (
    <div className="main">
{alldata}
{/* {colorbase} */}
    </div>
  )
}

export default Api
