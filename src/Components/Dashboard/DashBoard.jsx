import React, { Component} from 'react';
import SignUpLinks from '../Navbar/SignUpLinks';
import Footer from '../Footer/Footer';
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        console.log(this.props)
        return (
            <div className="mainPage">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container white">
                <h2 className="orange-text text-darken-4 center mainHeading">
                    Welcome to Campus Recruitment System 
                </h2>
                <p className="flow-text center">Please select one, in order to SignUp/SignIn.</p>
                <SignUpLinks props={this.props}/>
                <br/>
                <br/>
                <Footer />
                <br/>
            </div>
            </div>
        );
    }
}

export default DashBoard;