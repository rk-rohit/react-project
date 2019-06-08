import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const {projects, auth} = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />
        return (
            <div className="dashboard container mt-2">
                <div className="row">
                    <div className="col-md-6 col-12">
                       <ProjectList projects = {projects}/>
                    </div>
                    <div className="col-md-5 offset-md-1 col-12">
                        <Notifications />
                    </div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        projects : state.firestore.ordered.projects,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {'collection' : 'projects'}
    ]),
   
)(Dashboard);