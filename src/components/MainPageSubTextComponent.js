// MainPageSubTextComponent
// Stateless component that will render the text at the top of the page which will
// be under the image of the terminal

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
// Internal Modules

const TopOfPageSubText = styled.p`
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    color: white;
    display: block;
`
const MainPageSubTextComponent = () => {
    return (
        <div>
        <TopOfPageSubText>
            A Node-based chat app for the terminal
        </TopOfPageSubText>
        </div>
    )
}

export default MainPageSubTextComponent;