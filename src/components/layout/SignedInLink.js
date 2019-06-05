import React from 'react';
import {NavLink} from 'react-router-dom';

const SingedInLink = (props)=> {
    return(
        <div className="navbar-nav justify-content-between">
            <div className="navbar-nav">
                <NavLink to="/createProject" className="nav-item nav-link">Add New Project</NavLink>
                <NavLink to="/signedOut" className="nav-item nav-link">Log Out</NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink to="/profile" className="nav-item nav-link">
                    <span className="badge badge-pill badge-primary">Rohit</span>
                </NavLink>
            </div>
        </div>     
    )
}

export default SingedInLink;