// Component representing the app Logo

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// Internal Modules

const fade = keyframes`
  0% {
    background-position:0% 50%
  }
  50%{
    background-position:100% 50%
}
  100% {
    background-position:0% 50%;
  }
`

const Logo = styled.p`
    font-family: inherit;
    font-size: 35px;
    font-weight: 800;
    padding-left: 20px;
    color: ${props => props.buttonColor === 'white' ? 'white' : 'black'};
    width: auto;
    height: auto;
    display: inline;
`;

// color: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);
// animation: ${fade} 9s ease infinite;

const NavigationBarLogo = (props) => {
    return (
        <Logo buttonColor={props.buttonColor} >
            LMFAO
        </Logo>
    )
}

export default NavigationBarLogo;
