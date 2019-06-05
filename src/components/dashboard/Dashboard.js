import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container mt-2">
                <div className="row">
                    <div className="col-md-6 col-12">
                       <ProjectList />
                    </div>
                    <div className="col-md-5 offset-md-1 col-12">
                        <Notifications />
                    </div> 
                </div>
            </div>
        )
    }
}

export default Dashboard;