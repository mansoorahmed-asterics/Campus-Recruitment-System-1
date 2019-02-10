import React, { Component} from 'react';
import SignUpLinks from '../Navbar/SignUpLinks';
import Footer from '../Footer/Footer';
const DashBoard = (props) => {
        return (
            <div className="mainPage">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container white">
                <h2 className="orange-text text-darken-4 center mainHeading hide-on-med-and-down">
                    Welcome to Campus Recruitment System 
                </h2>
                <h6 className="orange-text text-darken-4 center mainHeading hide-on-large-only">
                    Welcome to Campus Recruitment System 
                </h6>
                <p className="flow-text center">Please select one, in order to SignUp/SignIn.</p>
                <SignUpLinks props={props}/>
                <br/>
                <br/>
                <Footer />
                <br/>
            </div>
            </div>
        );
}

export default DashBoard;