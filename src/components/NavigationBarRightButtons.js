// NavigationBarRightButton
// Component that contains the buttons that will be placed within the navigation bar on the right
// "About", "Getting Started", "Contact Me"

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
// Internal Modules
import NavigationBarButton from '../styledComponents/NavigationBarButton';

const NavigationBarButtonWrapper = styled.div`
    width: auto;
    height: auto;
    padding-right: 20px;
    align-items: center;
    display: flex;
`
// Maybe move the top and left styling to the parent component


const NavigationBarRightButton = styled(NavigationBarButton)`
    color: ${ props => props.buttonColor === 'white'? 'white': 'black'}
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
                <NavigationBarRightButton id="about" onClick={this.callChangePage} buttonColor={this.props.buttonColor} > 
                    About
                </NavigationBarRightButton>
                <NavigationBarRightButton id="contact" onClick={this.callChangePage} buttonColor={this.props.buttonColor} > 
                    Contact Me
                </NavigationBarRightButton>
            </NavigationBarButtonWrapper>
        )
    }
}

export default NavigationBarRightButtons;
