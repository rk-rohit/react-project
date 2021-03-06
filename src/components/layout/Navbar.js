import React from 'react';
import {Link} from 'react-router-dom';
import SingedInLink from './SignedInLink'; 
import SignedOutLink from './SignedOutLink';
import {connect} from 'react-redux';

const Navbar = (props)=> {
    const {auth} = props;
    const link = auth.uid ? <SingedInLink/> : <SignedOutLink/>;
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">My Project</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               {link}
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);