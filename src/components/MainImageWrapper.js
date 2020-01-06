// MainPageWrapper
// Component that styles the size of the terminal image
// and also adds potential animations

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import Terminal from 'terminal-in-react';
// Internal Modules

// Components
import ContactMeComponent from './ContactMeComponent';
import AboutComponent from './AboutComponent';

// Assets
import homeImage from '../../assets/images/homeScreen1.png';

const MainImage = styled.img`
    width: 37%;
`

const ImageWrapper = styled.div`
    background-color: inherit;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 500px;
    height: auto;
    display: block;
`

const initialMsg = () => "LMFAO is the only (original) chat app for the terminal.\n\nIt is human-focused. LMFAO doesn't record any of your conversations and allows you to message friends and coworkers effortlessly.\n\nIt is secure. LMFAO protects user privacy by using end to end encryption to prevent anyone (us included) from tracking user data.\n\nMore importantly, it is fun. Fun with a capital F. You can join public channels or create private channels to talk with anyone while giving the impression that you are doing intense engineering work.\n\nType 'lmfao' in order to see a preview of the application.";
const lastMsg = () => "Scroll down to learn more about LMFAO's features"
const lmfaoMsg = () => "LMFAO \n \n 🙊 \n \n 🙉 \n \n 🙈 \n \n \nYour one and only chat app for the terminal. Please type in 'npm' for a link to learn more about this package or scroll down.\n"
const npmMsg = () => "You can learn more about LMFAO at npmjs.com/package/lmfao.\n\nPlease type 'open' to open the page in another tab."
class MainImageWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commandTyped: "initialPrompt",
            currentPage: this.props.mainPage,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.changePage(nextProps.mainPage)
    }

    changePage = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }


    render() {

        console.log('Main page is', this.state.currentPage);
        return(
            <ImageWrapper>

            { this.state.currentPage === 'contact' && 
                <ContactMeComponent />
            }

            { this.state.currentPage === 'about' && 
                <AboutComponent />
            }

            </ImageWrapper>
        )
    }
}


export default MainImageWrapper;
