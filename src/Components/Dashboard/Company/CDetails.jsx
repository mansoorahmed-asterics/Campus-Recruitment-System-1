import React from 'react';
import { connect } from "react-redux";
const CDetails = (props) => {
    return (
        <div>{props.user ? (<></>) : (null)}</div>
    );
}
const mapStateToProps = (state) => {
    return{
        user: state.auth.currentUser,
    }
}
export default connect(mapStateToProps)(CDetails);