// Component representing the app Logo

// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// Internal Modules

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

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Logo = styled.p`
    font-family: inherit;
    font-size: 35px;
    font-weight: 800;
    padding-left: 20px;
    padding-right: 20px;
    color: ${props => props.buttonColor === 'white' ? 'white' : 'black'};
    width: auto;
    height: auto;
    display: inline;
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const BottomLine = styled.div`
  height: 3px;
  width: 117px;
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
        <NavBarContainer>
          <Logo buttonColor={this.props.buttonColor} id="about" onClick={this.callChangePage} >
              LMFAO
          </Logo>
          {
            this.props.mainPage == 'about' &&
            <BottomLine />
          }
        </NavBarContainer>
    )
  }
}

export default NavigationBarLogo;
