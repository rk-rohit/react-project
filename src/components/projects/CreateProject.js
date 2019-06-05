import React, {Component} from 'react';

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
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="form-group">
                        <legend>Create Project</legend>
                        <div className="form-group">
                            <label htmlFor="title">Password</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter Title" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Password</label>
                            <textarea className="form-control" id="content" placeholder="Write Details" onChange={this.handleChange}/>
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

export default CreateProject;