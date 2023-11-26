import React from 'react'

function Arrival() {
  return (
    <div >
    <div className="search">
      <input type="text" placeholder='Deckflight search' onChange={flightText}/>
      <button onClick={() => getdata(flightimput)}>Search</button>
    </div>
  </div>
  )
}

export default Arrival