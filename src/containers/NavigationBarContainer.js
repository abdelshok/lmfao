// Container for Navigation Bar

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// Internal Modules

// Components
import NavigationBarMenu from '../components/NavigationBarMenu'
// Styled Components
import NavigationBarWrapper from '../styledComponents/NavigationBarWrapper';

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

const NavigationBarDynamicWrapper = styled(NavigationBarWrapper)`
    background: ${props => props.pageColor === 'white' ? 'white' : 'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'};
    background-image: ${props => props.pageColor === 'white' ? 'white' :  'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'};
    animation: ${fade} 9s ease infinite;
    width: 100%;
    height: 100%;
    background-size: 2000% 2000%;
`;

class NavigationBarContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Internal state empty for now, might be overkill to make it class component
        }
    }

    render() {
        console.log("Button color in @NavigationBarContainer", this.props);
        return (
            <NavigationBarWrapper>
                <NavigationBarMenu changePage={this.props.changePage} pageColor={this.props.pageColor} changePageColor={this.props.changePageColor} buttonColor={this.props.buttonColor} />
            </NavigationBarWrapper>
        )
    }
}

export default NavigationBarContainer;
