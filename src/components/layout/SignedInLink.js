import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

const SingedInLink = (props)=> {

    return(
        <div className="navbar-nav justify-content-between">
            <div className="navbar-nav">
                <NavLink to="/createProject" className="nav-item nav-link">New Project</NavLink>
                <NavLink to="/" className="nav-item nav-link" onClick={props.signOut}>Log Out</NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink to="/profile" className="nav-item nav-link">
                    <span className="badge badge-pill badge-primary">Rohit</span>
                </NavLink>
            </div>
        </div>     
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : ()=> dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SingedInLink);