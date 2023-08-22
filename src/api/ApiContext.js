import React, { createContext, useEffect, useState } from 'react'
import { LINK } from './apiUrl'

const MyApiContext = createContext()

function ApiContext(props) {
const [data, setData] = useState([])
console.log(data)
    useEffect( () => {
      try {
      const context = async () => {
        await fetch(LINK, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(elem => setData(elem))
      }
      context()
    } catch (err)  {
      console.log('Found Errors')
    }
      }, []);
  // }
  return (
    <div>
      <MyApiContext.Provider value=''>{props.children}</MyApiContext.Provider>
    </div>
  )
}

export default ApiContext