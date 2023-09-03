import React, { useContext } from 'react'
import { BeautyshopContext } from '../api/ApiContext'
import ColorsBlock from '../layouts/ColorsBlock'

function useColor() {

  const { datas } = useContext(BeautyshopContext)

  // const newdata = datas?.map((detail, id) => {

  //     return <ColorsBlock palete={detail.product_colors}  />
  //   })


  // const newdata = datas?.map((data, id) => {
  //   const allcolors = data.product_colors
  //   const infocolor = allcolors?.map((color, id) => {
  //     const allprops = color.props
  //     const palete = allprops?.map((prop, id) => {
  //       const details = prop.palete
  //       const infodetails = details?.map((detail, id) => {
  //         return <ColorsBlock key={detail.id} colorround={detail.hex_value} colorname={detail.colour_name} />
  //       })
  //     })
  //   })
  // })

  const newdata = datas.map((data, id) => {
    const allcolors = data.product_colors
    const infocolor = allcolors.map((color, id) => { 
      return <ColorsBlock key={color.id} colorround={color.hex_value} colorname={color.colour_name} />
    })

  })

  console.log(newdata)
  return [newdata]
}

export default useColor