import React, { useContext } from 'react'
import { BeautyshopContext } from '../api/ApiContext'

function useColor() {

  const { datas } = useContext(BeautyshopContext)

  const infocolors = datas.product_colors
  const showpalete = (infocolors?.length === 0) ? "no colors" : ""

  console.log(showpalete)
  return [showpalete]
}

export default useColor