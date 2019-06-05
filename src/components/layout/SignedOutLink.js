import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLink = (props)=> {
    return(
        <div className="navbar-nav justify-content-between">
            <div className="navbar-nav">
                <NavLink to="/signUp" className="nav-item nav-link">Sign Up</NavLink>
                <NavLink to="/signIn" className="nav-item nav-link">Sign In</NavLink>
            </div>
        </div>     
    )
}

export default SignedOutLink;