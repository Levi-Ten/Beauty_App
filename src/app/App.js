import React from 'react'
import ApiContext from '../api/ApiContext'
import Home from '../pages/Home'
// import Delete from '../delete/Delete'


function App() {

  return (
    <div>
      {/* <Delete /> */}
      <ApiContext>
        <Home />
      </ApiContext>
      
    </div>
  )
}

export default App