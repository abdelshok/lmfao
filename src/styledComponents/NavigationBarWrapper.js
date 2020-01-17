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
    background: linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB);
    background-size: 2000% 2000%;
    background-image: linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB);    width: 100%;
    position: fixed;
    z-index: 10;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    animation: ${fade} 9s ease infinite;
`

// Back ground color can be set to transparent later on

export default NavigationBarWrapper;