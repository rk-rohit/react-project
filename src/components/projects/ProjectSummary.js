import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card mt-1">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                    Posted By Rohit Gautam <span className="text-muted">6 june, 2019</span>
                </p>
            </div>
        </div>
    )
}

export default ProjectSummary;
