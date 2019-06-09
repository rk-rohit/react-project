import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../store/actions/authActions';

class SignUp extends Component {
    
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
        this.props.signUp(this.state);
    }

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="form-group bg-white p-4">
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
                        <div className="text-danger text-center bg-white">{authError ? authError : null}</div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {

    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        signUp : (newUser)=> dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);