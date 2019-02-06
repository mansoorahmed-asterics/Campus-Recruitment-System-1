import React, { Component } from 'react';
import SignInLinks from './SignInLinks';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        return (
                <div>
                <nav className="nav-wrapper orange darken-4">
                    <div className="container">
                    <div className="brand-logo">
                    Campus Recruitment System
                    </div>
                    <SignInLinks />
                    </div>
                </nav>
                </div>
        );
    }
}

export default Navbar;