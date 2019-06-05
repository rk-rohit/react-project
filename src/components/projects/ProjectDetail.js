import React from 'react'

const ProjectDetail = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Project title - {props.match.params.id}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text">
                        Posted By Rohit Gautam <span className="text-muted">6 june, 2019</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
