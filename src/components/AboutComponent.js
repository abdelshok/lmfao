// About Component
// - Rendered in the @MainImageWrapper component
// - Renders a series of terminals that teach the new visitor abou the application

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import Terminal from 'terminal-in-react';

const initialMsg = () => "LMFAO is the only chat app for the terminal.\n\nYou can use it to secretly chat with your friends and coworkers while giving the impression that you're working.\n\nLMFAO protects user privacy by using end to end encryption to prevent anyone from tracking user data.\n\nMore importantly, you can effortlessly join already-existing public channels or create your own public or password-protected private channels that can each hold a maximum of 1,000 users to talk with anyone across the office or across the world.\n\nType 'lmfao' in the command line in order to open the package's NPM page in another tab and learn more about it.";
const lastMsg = () => "Scroll down to learn more about LMFAO's features"
const lmfaoMsg = () => "LMFAO \n \n 🙊 \n \n 🙉 \n \n 🙈 \n \n \nYour one and only chat app for the terminal. Please type in 'npm' for a link to learn more about this package.\n"
const npmMsg = () => "You can learn more about LMFAO at npmjs.com/package/lmfao or by looking up 'npm lmfao' in your search bar.\n\nAlternatively, you can type 'open' to open the NPM page in another tab.";

class AboutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commandTyped: 'initialPrompt',
        }
    }

    
    getLMFAO = () => {
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

    getNpmInfo = () => {
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

    getInitialInfo = () => {
        this.setState({
            commandTyped: 'initialPrompt'
        })
    }

    render() {
        return (
            <div>


            {
                this.state.commandTyped == 'initialPrompt' &&
                <div>
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    'lmfao':() => { window.open('https://www.npmjs.com/package/lmfao') },
                }}
                descriptions={{
                    'lmfao': 'Opens the NPM page for the package',
                }}
                msg={initialMsg()}
                />
                </div>
            }

            {/* { 
            
                this.state.commandTyped == 'lmfao' && 
                <div>
                    <Terminal
                    color='white'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                    commands={{
                        'npm': this.getNpmInfo, 
                        'lmfao': this.getLMFAO,
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
            
                this.state.commandTyped == 'npm' &&
                <div>
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    'lmfao': this.getLMFAO,
                    'npm': this.getNpmInfo,
                    'open':() => { window.open('https://www.npmjs.com/package/lmfao') },
                    ':)': this.getInitialInfo,

                }}
                descriptions={{
                    'lmfao': 'Runs the initial prompt of the package',
                }}
                msg={npmMsg()}
                />
                </div>
            } */}
            </div>
        )
    }

}

export default AboutComponent;