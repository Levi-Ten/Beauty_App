import React, { useContext } from 'react'
import { BeautyshopContext } from '../api/ApiContext'
import ColorsBlock from '../layouts/ColorsBlock'

function useColor() {

  const { datas } = useContext(BeautyshopContext)

  // const newdata = datas?.map((detail, id) => {

  //     return <ColorsBlock palete={detail.product_colors}  />
  //   })

  // const colors = datas?.map((detail, id) => {

  // const newdatas = detail.props
  // const newdata = newdatas?.map((data, id) => {
  //     return <ColorsBlock palete={data.hex_value}  />
  // })

  const newdata = datas?.map((detail, id) => {

    return <ColorsBlock palete={detail.product_colors} />
  })


  console.log(newdata)



  return [newdata]
}

export default useColor