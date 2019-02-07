import React from 'react';
const SignUpLinks = (props) => {
    return (
        <div className="row">
        <div className="col s12 l6 m6 offset-l5">
            <ul>
                <li className="flow-text form_a orange-text text-lighten-1" onClick={() => {props.props.history.push("/SignUp","Student")}}>
                    Student
                    <br/>
                </li>
                <li className="flow-text form_a orange-text text-lighten-1" onClick={() => {props.props.history.push("/SignUp","Company")}}>
                    Company
                    <br/>
                </li>
                <li className="flow-text form_a orange-text text-lighten-1" onClick={() => {props.props.history.push("/SignUp","Admin")}}>
                        Admin
                    <br/>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default SignUpLinks;