import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../store/actions/authActions';
import {Redirect} from 'react-router-dom';
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
        this.props.signIn(this.state);
    }

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="form-group bg-white p-4">
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
                        <div className="text-danger">
                            {authError ? authError.message : null}
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        signIn : (credential)=> dispatch(signIn(credential))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);