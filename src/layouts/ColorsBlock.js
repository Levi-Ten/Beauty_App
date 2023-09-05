import React, { useContext } from 'react'
import useColor from '../hooks/useColor'
import { BeautyshopContext } from '../api/ApiContext'
import cardstyle from "../style/brandCard.module.css"

function ColorsBlock({ colorround, colorname }) {

  const { datas } = useContext(BeautyshopContext)
  const [showpalete] = useColor()

  return (
    <div className={cardstyle.colorspalete}>
      <div className={cardstyle.showpalete}>
        <div>{colorround}</div>
        <p>{colorname}</p>
      </div>
    </div>
  )
}

export default ColorsBlock