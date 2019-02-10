import React, { Component } from 'react';
import { connect } from "react-redux";
class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>{this.props.user ? (<></>) : (null)}</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
    }
}
export default connect(mapStateToProps,)(Companies);