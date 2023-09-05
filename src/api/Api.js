import React, { useContext, useEffect, useState } from 'react'
import { GET_MAKEUPURL } from './ApiUrl'
import axios from 'axios'
import { BeautyshopContext } from './ApiContext'
import useMap from '../hooks/useMap'

function Api() {

  const { datas } = useContext(BeautyshopContext)
  const [alldata] = useMap()

  console.log(datas)
  return (
    <div className="main">
      {alldata}
    </div>
  )
}

export default Api
