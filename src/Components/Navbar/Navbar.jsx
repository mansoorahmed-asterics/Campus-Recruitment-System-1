import React, { Component } from 'react';
import SignInLinks from './SignInLinks';
import { connect } from "react-redux";
import { CURRENTUSER } from '../../Store/Actions/authActions';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    componentDidMount() {
        this.props.currentUser()
    }
    render() {
        return (
            <div>
                {this.props.User ? (<nav className="nav-wrapper orange darken-4">
                    <div className="container">
                        <div className="brand-logo">
                            Campus Recruitment System
                    </div>
                        <SignInLinks />
                    </div>
                </nav>) : (null)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const user = state.auth.currentUser ? state.auth.currentUser : null
    return {
        User: user,
        status: state.auth.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: () => dispatch(CURRENTUSER()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);