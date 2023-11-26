import React from 'react'
import './Departure.css'

function Departure() {
  return (
    <div >
    <div className="search">
      <input type="text" placeholder='Deckflight search' onChange={flightText}/>
      <button onClick={() => getdata(flightimput)}>Search</button>
    </div>
  </div>
  )
}

export default Departure