import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../store/actions/ProjectActions';

class CreateProject extends Component {
    
    state = {
        title : '',
        content : ''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    
    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.createProject(this.state);
        this.setState({
            title : '',
            connect: ''
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="form-group">
                        <legend>Create Project</legend>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" placeholder="Write Details" onChange={this.handleChange} value={this.state.content} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Add Project</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        createProject : (project)=> {
            dispatch(createProject(project))
        } 
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);