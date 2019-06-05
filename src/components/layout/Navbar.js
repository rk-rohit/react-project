import React from 'react';
import {Link} from 'react-router-dom';
import SingedInLink from './SignedInLink'; 
import SignedOutLink from './SignedOutLink';

const Navbar = (props)=> {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">My Project</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <SignedOutLink/>
                <SingedInLink/>
            </div>
        </nav>
    )
}

export default Navbar;