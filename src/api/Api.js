import React, { useContext, useEffect, useState } from 'react'
import { GET_MAKEUPURL } from './ApiUrl'
import axios from 'axios'
import { BeautyshopContext } from './ApiContext'
import useMap from '../hooks/useMap'
import useColor from '../hooks/useColor'
// import useColor from '../hooks/useColor'

function Api() {

const {datas} = useContext(BeautyshopContext)

const [alldata] = useMap()
const [newdata] = useColor()

console.log(datas)
  return (
    <div className="main">
{alldata}
{newdata}
    </div>
  )
}

export default Api
