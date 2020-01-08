// Component representing the app Logo

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// Internal Modules

const Logo = styled.p`
    font-family: inherit;
    font-size: 35px;
    font-weight: 800;
    padding-left: 20px;
    color: ${props => props.buttonColor === 'white' ? 'white' : 'black'};
    width: auto;
    height: auto;
    display: inline;
    cursor: pointer;
`;

// color: linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000);
// animation: ${fade} 9s ease infinite;

class NavigationBarLogo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Empty
    }
  }

  callChangePage = (event) => {
    this.props.changePage(event.target.id);
  }

  render() {
      return (
        <Logo buttonColor={this.props.buttonColor} id="about" onClick={this.callChangePage} >
            LMFAO
        </Logo>
    )
  }
}

export default NavigationBarLogo;
