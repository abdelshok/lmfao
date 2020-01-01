// Styling wrapper for the navigation bar
// Contains logo of the NPM package, and a few buttons like "About", "Getting Started"
// and "Contact me"

import styled, { keyframes } from 'styled-components';


// Centralize keyframe fade animation. Not DRY. 

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

const NavigationBarWrapper = styled.div`
    height: 80px;
    background: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);
    background-size: 2000% 2000%;
    background-image: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);    width: 100%;
    position: fixed;
    z-index: 10;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    animation: ${fade} 9s ease infinite;
`

// Back ground color can be set to transparent later on

export default NavigationBarWrapper;