// NavigationBarMenu
// Component that contains the logo and menu options placed in the navigation bar
// Ensures consistent styling

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';

// Internal Modules
import NavigationBarLogo from './NavigationBarLogo';
import NavigationBarRightButtons from './NavigationBarRightButtons';

const NavigationBarMenuWrapper = styled.div`
    height: auto;
    width: 100%;
    background-color: inherit;
    display: flex; 
    justify-content: space-between;
`

const NavigationBarMenu = (props) => {
    return (
        <NavigationBarMenuWrapper>
            <NavigationBarLogo />
            <NavigationBarRightButtons changePage={props.changePage} />
        </NavigationBarMenuWrapper>
    )
}

export default NavigationBarMenu;
