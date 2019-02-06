import React, { Component } from 'react';
import SignUpLinks from '../Navbar/SignUpLinks';
import Footer from '../Footer/Footer';
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container orange lighten-4">
            
                <h2 className="black-text text-darken-4 center">
                    Welcome to Campus Recruitment System 
                </h2>
                <br/>
                <SignUpLinks/>
                <br/>
                <br/>
                <Footer />
                <br/>
            </div>
        );
    }
}

export default DashBoard;