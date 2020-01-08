
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
// Assets
import ReactImage from './react.png';

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
  background: ${props => props.pageColor === 'white' ? 'white' : 'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'};
  background-image: ${props => props.pageColor === 'white' ? 'white' :  'linear-gradient(270deg, #ff1212, #ff9b00, #f2ff00, #55ff00, #00ff76, #00ffb9, #004dff, #7200ff, #e200ff, #ff0000)'};
  animation: ${fade} 9s ease infinite;
  width: 100%;
  height: 100%;
  background-size: 2000% 2000%;
`

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
    console.log('Main page is now', newPage);
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
    const { username } = this.state;
    console.log('@App re-rendered with value', this.state.pageColor);
    return (
        <NewAppComponentWrapper pageColor={this.state.pageColor}>
            <NavigationBarContainer buttonColor={this.state.buttonColor} pageColor={this.state.pageColor} changePage={this.changePage} changePageColor={this.changePageColor} />
            <MainPageImageContainer mainPage={this.state.mainPage} pageColor={this.state.pageColor} />
        </NewAppComponentWrapper>
    );
  }
}
