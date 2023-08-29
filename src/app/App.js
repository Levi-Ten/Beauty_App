import React from 'react'
import ApiContext from '../api/ApiContext'
import Home from '../pages/Home'


function App() {

  return (
    <div>
      <ApiContext>
        <Home />
      </ApiContext>
    </div>
  )
}

export default App