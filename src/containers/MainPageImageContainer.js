// MainPageImageContainer
// Container for the image of the terminal and the text that is going to be above it
// at the very top of the page

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
// Internal Modules
// Components
import MainImageWrapper from '../components/MainImageWrapper';
import MainPageSubTextComponent from '../components/MainPageSubTextComponent';

const TopOfPageImageWrapper = styled.div`
    padding-top: 140px;
    background-color: inherit;
    display: flex;
    align-items: center;
    height: auto; 
    width: 100%;
    flex-direction: column;
`

class MainPageImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <TopOfPageImageWrapper>
                <MainImageWrapper />
                <MainPageSubTextComponent />
     
            </TopOfPageImageWrapper>
        )
    }
}

export default MainPageImageContainer;
