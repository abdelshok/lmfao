// MainPageImageContainer
// Container for the image of the terminal and the text that is going to be above it
// at the very top of the page

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// Internal Modules
// Components
import MainImageWrapper from '../components/MainImageWrapper';
import MainPageSubTextComponent from '../components/MainPageSubTextComponent';

const TopOfPageImageWrapper = styled.div`
    padding-top: 115px;
    background: inherit;
    background-image: color; 
    display: flex;
    align-items: center;
    height: 100%; 
    width: 100%;
    flex-direction: column;
    background-image: inherit;
    animation: ${fade} 9s ease infinite;
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
`

class MainPageImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPage: 'about'
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('Re-rendering to ensure props are passed down with value', nextProps.mainPage);
        this.setState({
            mainPage: nextProps.mainPage
        })
    }

    render() {
        return (
            <TopOfPageImageWrapper>
                <MainImageWrapper mainPage={this.state.mainPage} />     
            </TopOfPageImageWrapper>
        )
    }
}

export default MainPageImageContainer;
