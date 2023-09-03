import React, { useContext } from 'react'
import { BeautyshopContext } from '../api/ApiContext'

function useRating() {
  const {datas} = useContext(BeautyshopContext)
  const rate = datas.rate
  const showrate = (rate === null)? "the product has no reviews" : ""

  return [showrate]
}

export default useRating