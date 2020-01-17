
// External Packages
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// Internal Modules
// Components
import AppComponentWrapper from '../styledComponents/AppComponentWrapper';
import NavigationBarContainer from '../containers/NavigationBarContainer';
import TestComponent from '../components/TestComponent';
// Containers
import MainPageImageContainer from '../containers/MainPageImageContainer';
// Styling
import './app.css';

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

const NewAppComponentWrapper = styled(AppComponentWrapper)`
  background: ${props => props.pageColor === 'white' ? 'white' : 'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'};
  background-image: ${props => props.pageColor === 'white' ? 'white' :  'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'};
  animation: ${fade} 9s ease infinite;
  width: 100%;
  height: 100%;
  background-size: 2000% 2000%;
  overflow: hidden;
`

// Pastel: 'linear-gradient(270deg, #FF9CEE, #FCC2FF, #B28DFF, #D5AAFF, #A79AFF, #AFF8DB, #ACE7FF, #BFFCC6, #FFFFD1, #FFABAB)'
// Rainbow: 'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainPage: 'about',
      pageColor: 'rainbow',
      buttonColor: 'white',
    }
  }

  changePage = (newPage) => {
    this.setState({
      mainPage: newPage
    })
  }

  changePageColor = () => {
    if (this.state.pageColor === 'white') {
      this.setState({
         pageColor: 'rainbow',
         buttonColor: 'white'
      });
    }  else if (this.state.pageColor === 'rainbow') {
      this.setState({ 
        pageColor: 'white',
        buttonColor: 'black',
      });
    }
  }

  // Rename the MainPageImageContainer to AboutPageCOntianer
  // Create the Contact Me using Twilio or simply an email API to send an email
  // Think about the About and getting Started 
  render() {
    return (
        <NewAppComponentWrapper pageColor={this.state.pageColor}>
            <NavigationBarContainer buttonColor={this.state.buttonColor} pageColor={this.state.pageColor} changePage={this.changePage} changePageColor={this.changePageColor} />
            <MainPageImageContainer mainPage={this.state.mainPage} pageColor={this.state.pageColor} />
        </NewAppComponentWrapper>
    );
  }
}
