import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const ProjectDetail = ({project, auth}) => {
    
    if (!auth.uid) return <Redirect to='/signIn' />

    if (project) {
        return (
            <div className="container">
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.content}</p>
                        <p className="card-text">
                            Posted By {project.authorFirstName} {project.authorLastName} <span className="text-muted">{moment(project.createdAt.seconds).calendar()}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
    
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project : project,
        auth : state.firebase.auth
    }
}


export default compose(connect(mapStateToProps),firestoreConnect([{collection:'projects'}]) )(ProjectDetail)
