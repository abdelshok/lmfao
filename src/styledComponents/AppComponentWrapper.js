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
    background: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);
    background-size: 2000% 2000%;
    background-image: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);
    height: 100%;
    width: 100%;
    animation: ${fade} 9s ease infinite;
`

export default AppComponentWrapper;
