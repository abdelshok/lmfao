// NavigationBarRightButton
// Component that contains the buttons that will be placed within the navigation bar on the right
// "About", "Getting Started", "Contact Me"

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';

const NavigationBarButtonWrapper = styled.div`
    width: auto;
    height: auto;
    padding-right: 20px;
    align-items: center;
    display: flex;
`
// Maybe move the top and left styling to the parent component

const NavigationBarButton = styled.span`
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
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
                <NavigationBarButton id="about" onClick={this.callChangePage}> 
                    About
                </NavigationBarButton>
                <NavigationBarButton id="contact" onClick={this.callChangePage}> 
                    Contact Me
                </NavigationBarButton>
            </NavigationBarButtonWrapper>
        )
    }
}

export default NavigationBarRightButtons;
