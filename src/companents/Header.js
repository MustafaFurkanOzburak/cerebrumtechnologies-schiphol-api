import React from 'react';
import styled from "styled-components";

import logo from './images/airport.png';

const StyledHeader = styled.div`
    height: 8vh;
    background-color: #72A0C1;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    
`;


export const Header = () => {
  return (
    <StyledHeader>
    <div className='logo-container'>
        <img src={logo} alt="logo"/>
    </div>
    <nav>
        <ul>
            <li>Anasayfa</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
    </StyledHeader>
  )
}
