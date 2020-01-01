// MainPageWrapper
// Component that styles the size of the terminal image
// and also adds potential animations

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import Terminal from 'terminal-in-react';

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

const initialMsg = () => "LMFAO is the only chat app for the terminal.\n\nIt is secure. LMFAO doesn't record any user conversations.\n\nIt is user-focused. In an era of decreasing internet privacy, LMFAO protects it by using end to end encryption to prevent even us from tracking user data.\n\nMore importantly, it is fun. Fun with a capital F. You can join public channels or create private channels to talk with your friends or coworkers while giving the impression that you are working.\n\nType 'lmfao' in order to launch the application.";
const lastMsg = () => "Scroll down to learn more about LMFAO's features"
const lmfaoMsg = () => "LMFAO \n \n 🙊 \n \n 🙉 \n \n 🙈 \n \n \nYour one and only chat app for the terminal. Please type in 'npm' for a link to learn more about this package or scroll down.\n"
const npmMsg = () => "You can learn more about LMFAO at npmjs.com/package/lmfao.\n\nPlease type 'open' to open the page in another tab."
class MainImageWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commandTyped: "initialPrompt",
        }
    }

    lmfaoTyped = () => {
        setTimeout(() => {
            this.setState({
                commandTyped: ''
            })
            setTimeout(() => {
                this.setState({
                    commandTyped: 'lmfao'
                })
            }, 0)
        }, 0)
    }

    npmTyped = () => {
        setTimeout(() => {
            this.setState({
                commandTyped: ''
            })
            setTimeout(() => {
                this.setState({
                    commandTyped: 'npm'
                })
            }, 0)
        }, 0)
    }

    render() {


        return(
            <ImageWrapper>
    
            {this.state.commandTyped == 'lmfao' && 
                <div>
                    <Terminal
                    color='white'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em", height: "60%"}} // Overrides the parent style
                    commands={{
                        'npm': this.npmTyped, 
                        'lmfao': this.lmfaoTyped,
                    }}
                    descriptions={{
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg={lmfaoMsg()}
                    />
                </div>
            }

            {
                this.state.commandTyped == 'initialPrompt' &&
                <div>
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%"}} // Overrides the parent style
                commands={{
                    'lmfao': this.lmfaoTyped,
                }}
                descriptions={{
                    'lmfao': 'Runs the initial prompt of the package',
                }}
                msg={initialMsg()}
                />
                </div>
            }

{
                this.state.commandTyped == 'npm' &&
                <div>
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%"}} // Overrides the parent style
                commands={{
                    'lmfao': this.lmfaoTyped,
                    'npm': this.npmTyped,
                    'open':() => window.open('https://www.npmjs.com/package/lmfao'),

                }}
                descriptions={{
                    'lmfao': 'Runs the initial prompt of the package',
                }}
                msg={npmMsg()}
                />
                </div>
            }

            </ImageWrapper>
        )
    }
}


            {/* <MainImage 
                src={homeImage}
                alt="homeImage"
                /> */}

export default MainImageWrapper;
