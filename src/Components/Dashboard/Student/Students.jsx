import React, { Component } from 'react';
import { connect } from "react-redux";

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {this.props.user ? (<div className="container">

                </div>) : (null)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students);