import React, {useState} from 'react';
import "./images/mainFlight.jpg"
import './App.css';

function App() {
  const APP_KEY = "e4ac444289079f2961f3f69de9df3688"
  let flightimput=""
  const [flightdata,setflightdata] = useState([])
  function flightText() {
    document.querySelector("input").addEventListener("input", (e) => {e.preventDefault();
    flightimput = e.target.value;
    console.log(flightimput)
    })
  }
  async function getdata(value)
  {
    const data=await fetch('https://api.schiphol.nl/public-flights/flights?app_id=274c4c05&app_key=e4ac444289079f2961f3f69de9df3688&page=1')
    const result = await data.json();
    
    console.log(result)
  }
  return (
    <>
    <div >
      <div className="search">
        <input type="text" placeholder='Deckflight search' onChange={flightText}/>
        <button onClick={() => getdata(flightimput)}>Search</button>
      </div>
    </div>
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li>Main Page</li>
        <li>Departure</li>
        <li>Arrival</li>
        <li>About_us</li>
        <li>Contect</li>
      </ul>
    </nav>
    <section className="backimages"></section>
    </>
  );
}

export default App;
