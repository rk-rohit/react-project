import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = (props)=> {
    return (
        <div className="project-list">
           <ProjectSummary />
           <ProjectSummary />
           <ProjectSummary />
        </div>
    )
}

export default ProjectList;