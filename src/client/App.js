
// External Packages
import React, { Component } from 'react';

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


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainPage: 'about',
    }
  }

  changePage = (newPage) => {
    console.log('Main page is now', newPage);
    this.setState({
      mainPage: newPage
    })
  }

  // Rename the MainPageImageContainer to AboutPageCOntianer
  // Create the Contact Me using Twilio or simply an email API to send an email
  // Think about the About and getting Started 
  render() {
    const { username } = this.state;
    console.log('@App re-renderded with value', this.state.mainPage);
    return (
        <AppComponentWrapper>
            <NavigationBarContainer changePage={this.changePage} />
            <MainPageImageContainer mainPage={this.state.mainPage} />
        </AppComponentWrapper>
    );
  }
}
