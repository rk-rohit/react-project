import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container mt-2">
                <div className="row">
                    <div className="col-md-6 col-12">
                       <ProjectList projects = {this.props.projects}/>
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
        projects : state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);