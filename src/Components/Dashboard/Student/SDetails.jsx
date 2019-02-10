import React from 'react';
import { connect } from "react-redux";
const SDetails = (props) => {
    return (
        <div>{props.user ? (<div className="container">

        </div>) : (null)}</div>
    );
}
const mapStateToProps = (state) => {
    const allStudents = state.student.allStudents;
    return {
        user: state.auth.currentUser,
    }
}
export default connect(mapStateToProps)(SDetails);