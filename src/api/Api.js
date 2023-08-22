import React, { useContext } from 'react'
import { MyApiContext } from './ApiContext'

function Api() {
  const { data } = useContext(MyApiContext)
  const getData = data.map( (el) => {
    return el
  })
  console.log(getData)
  return (
    <div>Api</div>
  )
}

export default Api