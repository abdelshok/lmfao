// Container for Navigation Bar

// External Packages
import React, { Component } from 'react';

// Internal Modules

// Components
import NavigationBarMenu from '../components/NavigationBarMenu'
// Styled Components
import NavigationBarWrapper from '../styledComponents/NavigationBarWrapper';

class NavigationBarContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Internal state empty for now, might be overkill to make it class component
        }
    }

    render() {
        return (
            <NavigationBarWrapper>
                <NavigationBarMenu />
            </NavigationBarWrapper>
        )
    }
}

export default NavigationBarContainer;