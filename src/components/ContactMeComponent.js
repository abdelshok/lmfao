// ContactMe Component
// - Rendered in the @MainImageWrapper component
// - Renders a terminal that allows the visitor to send an email through it

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import Terminal from 'terminal-in-react';
import { EmailJSResponseStatus } from 'emailjs-com';


const joinWordsTogether = (arrayOfNames) => {
    let joinedFullName = arrayOfNames.join(' ');
    console.log(joinedFullName);
    return joinedFullName;
}

class ContactMeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 'contact1',
            email: '',
            name: '',
            message: '',
        }
    }


    firstMsg = () => "You will be able to message me through this fake terminal window. You can go back to the first step at anytime by typing 'first'\n\n In order to contact me, please type in 'name' followed by your full name: "
    secondMsg = () => `Your name is ${this.state.name}\n\nNow please type 'email' followed by your email. Ie. email elon@musk.com`
    thirdMsg = () => `Your email is ${this.state.email}.\n\nNow please type in 'message' followed by your message. Only press enter when you are ready to send it.`;
    fourthMsg = () => "Message successfully sent.";


    // Handler functions

    changeStep = (step) => {
        this.setState({
            currentStep: step
        })
    }

    setName = (fullName) => {
        this.setState({
            name: fullName
        })
    };

    setEmail = (email) => {
        this.setState({
            email: email
        })
    }

    setMessage = (message) => {
        this.setState({
            message: message
        })
        this.sendEmail(message);
    }

    sendEmail = (message) => {
        let templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: message,
        }
        emailjs.send('gmail', 'template_euqlPtfy', templateParams)
        .then(function(response) {
            console.log('EmailJS Success!', response.status, response.text);
         }, function(error) {
            console.log('Failed...', error);
         });    
    }

    render() {
        return (

            <div>

                { 
                this.state.currentStep === 'contact1' &&
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    name: {
                        method: (args, print, runCommand) => {
                            let arrayOfNames = args._;
                            let fullName= joinWordsTogether(arrayOfNames);
                            this.setName(fullName);
                            this.changeStep('contact2');
                        },
                        // options: [
                        //   {
                        //     name: 'color',
                        //     description: 'The color the output should be',
                        //     defaultValue: 'white',
                        //   },
                        // ],
                      },
                }}
                msg={this.firstMsg()}
                />                 
                }

                { 
                this.state.currentStep === 'contact2' &&
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    email: {
                        method: (args, print, runCommand) => {
                            let array = args._;
                            let email = array[0];
                            console.log('Email is', email);
                            this.setEmail(email);
                            this.changeStep('contact3');
                        },

                      },
                }}
                msg={this.secondMsg()}
                />                 
                }

                { 
                this.state.currentStep === 'contact3' &&
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                commands={{
                    message: {
                        method: (args, print, runCommand) => {
                            let arrayOfWords = args._;
                            let message = joinWordsTogether(arrayOfWords);
                            this.setMessage(message);
                            this.changeStep('contact4');
                        },

                      },
                }}
                msg={this.thirdMsg()}
                />                 
                }   


                { 
                this.state.currentStep === 'contact4' &&
                <Terminal
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", height: "60%", textAlign: 'justify'}} // Overrides the parent style
                msg={this.fourthMsg()}
                />                 
                }   
            </div>
        )
    }
}



export default ContactMeComponent;