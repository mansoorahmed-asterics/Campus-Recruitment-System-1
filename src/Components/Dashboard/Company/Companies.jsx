import React, { Component } from 'react';
import { connect } from "react-redux";
class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>{this.props.user ? (<div className="container">
                {this.props.allCompanies.length > 0 ? (<div></div>) : (<div className="center grey-text flow-text">
                    Sorry, No Student available.
                              </div>)}
            </div>) : (null)}</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        allCompanies: state.company.allCompanies,
    }
}
export default connect(mapStateToProps)(Companies);