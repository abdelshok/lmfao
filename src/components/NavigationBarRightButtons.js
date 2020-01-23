// NavigationBarRightButton
// Component that contains the buttons that will be placed within the navigation bar on the right
// "About", "Getting Started", "Contact Me"

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// Internal Modules
import NavigationBarButton from '../styledComponents/NavigationBarButton';

const NavigationBarButtonWrapper = styled.div`
    width: auto;
    height: auto;
    padding-right: 20px;
    display: flex;
    padding-top: 8px;
    flex-direction: column;
`

// Maybe move the top and left styling to the parent component


const NavigationBarRightButton = styled(NavigationBarButton)`
    color: ${ props => props.buttonColor === 'white'? 'white': 'black'}
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 3px;
`

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
`;

const BottomLine = styled.div`
  height: 3px;
  width: 105px;
  background-color: black;
  display: inline-block;
  margin: 0 auto;
  background: black;
  color: black;
  background-image: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);
  background: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)s;
  background-size: 2000% 2000%;
  animation: ${fade} 2s ease infinite;
`



class NavigationBarRightButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Empty for now
        }
    }

    callChangePage = (event) => {
        this.props.changePage(event.target.id);
    }

    render() {
        return (
            <NavigationBarButtonWrapper>
                {/* <NavigationBarRightButton id="about" onClick={this.callChangePage} buttonColor={this.props.buttonColor} > 
                    About
                </NavigationBarRightButton> */}
                <NavigationBarRightButton id="contact" onClick={this.callChangePage} buttonColor={this.props.buttonColor} > 
                    Contact Me
                </NavigationBarRightButton>
                {
                    this.props.mainPage == 'contact' &&
                    <BottomLine />
                }
            </NavigationBarButtonWrapper>
        )
    }
}

export default NavigationBarRightButtons;
