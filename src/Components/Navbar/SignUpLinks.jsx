import React from 'react';
import { NavLink } from "react-router-dom"
const SignUpLinks = () => {
    return (
        <div className="row">
        <div className="col s12 l6 m6 offset-l5">
            <ul>
                <li className="flow-text">
                    <NavLink to="/StudentSignUp">Student</NavLink>
                    <br/>
                </li>
                <li className="flow-text">
                    <NavLink to="CampanySignUp">Company</NavLink>
                    <br/>
                </li>
                <li className="flow-text">
                    <NavLink to="AdminSignUp">Admin</NavLink>
                    <br/>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default SignUpLinks;