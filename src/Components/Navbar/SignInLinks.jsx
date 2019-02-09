import React from 'react';
import { NavLink } from "react-router-dom";
const SignInLinks = (props) => {
    const char = props.email.slice(0, 1)
    return (
        <ul className="right">
            <li>
                <NavLink to="/">Student</NavLink>
            </li>
            <li>
                <NavLink to="/">Company</NavLink>
            </li>
            <li>
                <NavLink to="/Registration">Reg</NavLink>
            </li>
            <li>
                <NavLink to="/CompanyInfo">Comapny Info</NavLink>
            </li>
            <li>
                <NavLink to="/Posting">
                    Post New Vacancy
                </NavLink>
            </li>
            <li>
                <NavLink to="/SignOut">Sign Out</NavLink>
            </li>
            <li>
                <NavLink to="/Profile" className='btn btn-floating orange darken-3'>{char}</NavLink>
            </li>
        </ul>
    );
}

export default SignInLinks;