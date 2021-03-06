import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectButton } from '../action/notesAction';

import './index.css';

class Login extends Component {
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
        if (this.state.user.trim().length > 0 && this.state.password.length > 7) { this.props.history.push('/next'); this.props.selectButton() } else {
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
            <div className="Login-container">
                <div className="Login">
                    <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                        <div><label htmlFor="email">
                            User Name:</label>
                            <input name="user" type="email" id="input" value={this.state.user} onChange={this.handleUserChange.bind(this)} />
                        </div>
                        <div>                        <label htmlFor="password">
                            Password:</label>
                            <input name="password" type="password" id="input" value={this.state.password} onChange={this.handleUserChange.bind(this)} />
                            </div>
                        <br /><span style={{ color: "red" }}>{this.state.errors}</span>
                        <div><input type="submit" value="Submit" id="submitButton" /></div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch) => {
    return {
        selectButton: (flag) => { dispatch(selectButton())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);