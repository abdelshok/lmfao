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

const NavigationBarRightButtons = () => {
    return (
        <NavigationBarButtonWrapper>
            <NavigationBarButton> 
                About
            </NavigationBarButton>
            <NavigationBarButton> 
                Getting Started
            </NavigationBarButton>
            <NavigationBarButton> 
                Contact Me
            </NavigationBarButton>
        </NavigationBarButtonWrapper>
    )
}

export default NavigationBarRightButtons;
