import React, {Component} from 'react';

class SignIn extends Component {
    
    state = {
        email : '',
        password : ''
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
                        <legend>Sign In</legend>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignIn;