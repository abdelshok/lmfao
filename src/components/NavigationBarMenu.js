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
    background: ${props => props.pageColor === 'white' ? 'white' : 'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'};
    background-image: ${props => props.pageColor === 'white' ? 'white' :  'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'};
    animation: ${fade} 9s ease infinite;
    width: 100%;
    height: 100%;
    background-size: 2000% 2000%;
    padding-top: 28px;
    padding-left: 10px;
    padding-right: 10px;
`

const NavigationBarLeftButton = styled(NavigationBarButton)`
    font-size: 18px; 
    color: ${props => props.buttonColor === 'white' ? 'white ': 'black'};
`

const LeftNavBarWrapper = styled.div`
    text-align: center;
`

const NavigationBarMenu = (props) => {
    return (
        <NavigationBarMenuWrapper pageColor={props.pageColor} >
            <LeftNavBarWrapper>
                <NavigationBarLogo buttonColor={props.buttonColor} />

                {
                    props.buttonColor === 'white' &&
                    <NavigationBarLeftButton id="disable" onClick={props.changePageColor} buttonColor={props.buttonColor}> 
                        Disable Rainbow
                    </NavigationBarLeftButton>
                }

                {
                    props.buttonColor === 'black' &&
                    <NavigationBarLeftButton id="enable" onClick={props.changePageColor} buttonColor={props.buttonColor}> 
                        Enable Rainbow
                    </NavigationBarLeftButton>
                }

            </LeftNavBarWrapper>
            <NavigationBarRightButtons changePage={props.changePage} buttonColor={props.buttonColor} />
        </NavigationBarMenuWrapper>
    )
}

export default NavigationBarMenu;
