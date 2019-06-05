import React, {Component} from 'react';

class SignIn extends Component {
    
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : ''
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
                        <legend>Sign Up</legend>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignIn;