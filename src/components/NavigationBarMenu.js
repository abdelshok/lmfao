// NavigationBarMenu
// Component that contains the logo and menu options placed in the navigation bar
// Ensures consistent styling

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// Internal Modules
// Components
import NavigationBarLogo from './NavigationBarLogo';
import NavigationBarRightButtons from './NavigationBarRightButtons';
// Styled components
import NavigationBarButton from '../styledComponents/NavigationBarButton';


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

const NavigationBarMenuWrapper = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    background: ${props => props.pageColor === 'white' ? 'white' : 'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)' };
    background-image: ${props => props.pageColor === 'white' ? 'white' :  'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'};
    animation: ${fade} 9s ease infinite;
    width: 100%;
    height: 100%;
    background-size: 2000% 2000%;
    padding-top: 15px;
`
// Rainbow: 'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'
// Pastel: 'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'

const NavigationBarLeftButton = styled(NavigationBarButton)`
    font-size: 18px; 
    color: ${props => props.buttonColor === 'white' ? 'white ': 'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'};
    animation: ${fade} 9s ease infinite;
    background: ${props => props.buttonColor === 'white' ? 'white' :  'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'};
    background-size: 2000% 2000%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`

const LeftNavBarWrapper = styled.div`
    text-align: center;
`

const NavigationBarMenu = (props) => {
    return (
        <NavigationBarMenuWrapper pageColor={props.pageColor} >
            <LeftNavBarWrapper>
                <NavigationBarLogo buttonColor={props.buttonColor} changePage={props.changePage} mainPage={props.mainPage} />

                {/* {
                    props.buttonColor === 'white' &&
                    <NavigationBarLeftButton id="disable" onClick={props.changePageColor} buttonColor={props.buttonColor}> 
                        Disable Colors
                    </NavigationBarLeftButton>
                }

                {
                    props.buttonColor === 'black' &&
                    <NavigationBarLeftButton id="enable" onClick={props.changePageColor} buttonColor={props.buttonColor}> 
                        Enable Colors
                    </NavigationBarLeftButton>
                } */}

            </LeftNavBarWrapper>
            <NavigationBarRightButtons changePage={props.changePage} buttonColor={props.buttonColor} mainPage={props.mainPage}/>
        </NavigationBarMenuWrapper>
    )
}

export default NavigationBarMenu;
