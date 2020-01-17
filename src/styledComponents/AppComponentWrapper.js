// Main App Container / Wrapper 
// Sets the styling for the whole page and is the most parent component within the 
// component tree 

import styled, { keyframes } from 'styled-components';

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

const AppComponentWrapper = styled.div`
    background: linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB);
    background-size: 2000% 2000%;
    background-image: linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB);
    height: 100%;
    width: 100%;
    animation: ${fade} 9s ease infinite;
`

export default AppComponentWrapper;
