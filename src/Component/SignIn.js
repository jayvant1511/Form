import React from 'react';
import { Component } from 'react';
import {connect}  from 'react-redux';
class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            error : "Invalid Cred."
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit (event)  {
        // event.preventDefault();
        var userName = event.target.userName.value;
        var password = event.target.password.value;

        console.log(userName, password);
        this.setState({
            userName: userName,
            password: password
        });
        this.props.dispatch({
            type:'1',
            value: 5
        });
    }
    render() {
        
        return (
            <div className="appSignIN">
                <form className="formSignin" onSubmit={this.onSubmit}>
                    <h1 className="signIn"> Sign In to Continue</h1>
                    <div className="inputName">
                        <div className="inputGroup">
                            <label>User Name</label>
                            <input type="text" id="userName" className="userName" placeholder="Username" autoComplete="0ff" required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" id="password" className="password" placeholder="Password" required />
                        </div>
                    </div>
                    {this.state.error && <div className="error">{this.state.error}</div>}
                    <button className="submitBtn" type="submit" >Login</button>
                </form>
            </div>
        );
    }
}

export default connect()(signIn);