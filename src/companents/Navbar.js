import React from "react";
import Logo from "../images/airport.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
  <div className='Navbar'>
    <div className='leftSide'>
        <img src={Logo} alt="logo"/>
    </div>
    <div className='rightSide'>
      <Link to="/">Main_page</Link>
      <Link to="/">Departure</Link>
      <Link to="/">Arrival</Link>
      <Link to="/">Contact Us</Link>
    </div>
  </div>
  )
}

export default Navbar