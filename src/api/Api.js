import React from 'react'
import useMap from '../hooks/useMap'

function Api() {
 const [getData] = useMap()

  return (
    <div>
      {getData}
    </div>
  )
}

export default Api