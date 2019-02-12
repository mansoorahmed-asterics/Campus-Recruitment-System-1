import React from 'react';
import Type from '../../Store/const/Types';
import { connect } from "react-redux";
const Blocked = (props) => {
    return (
        <div className="container"> 
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="orange lighten-4 center">
        <b className='flow-text'>Your Account has been blocked by Admin!</b>
        <br/>
        <br/>
        <button className="btn-small orange" onClick={() => props.goBack()}>Go Back To SignUp/SignIn</button>
        <br/>
        <br/>
        </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        goBack:() => dispatch({type: Type.userIsNotBlocked})
    }
}
export default connect(null, mapDispatchToProps)(Blocked);