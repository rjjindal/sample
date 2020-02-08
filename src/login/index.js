import React, { Component } from 'react';
import './index.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            errors: '',
        }
    }
    handleUserChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    // handlePasswordChange(event) {
    //     this.setState({ password: event.target.value });
    // }
    handleSubmit(event) {
        if (this.state.user.trim().length > 0 && this.state.password.length > 7) { this.props.history.push('/next') } else {
            this.setState({
                errors: 'please filled correct details'
            })
        }
        const id = this.state.user
        window.localStorage.setItem('id', id);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="Login">
                    <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                        <div><label htmlFor="email">
                            User Name:</label>
                            <input name="user" type="email" value={this.state.user} onChange={this.handleUserChange.bind(this)} />
                        </div>
                        <div>                        <label htmlFor="password">
                            Password:</label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleUserChange.bind(this)} />
                            </div>
                        <br /><span style={{ color: "red" }}>{this.state.errors}</span>
                        <div><input type="submit" value="Submit" /></div>
                    </form>
                </div>
            </div>
        );
    }
}