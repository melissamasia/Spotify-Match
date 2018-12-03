import React, { Component } from 'react';
import './LoginPane.css';
import logo from './logo.png';
import check from './check.png';
import { Button } from 'react-bootstrap';

class LoginPane extends Component {
    render(){
        if (this.props.loggedIn){
            return (
                <div className="Pane">
                    <img className="check-icon"src={check}></img>
                    <p> {this.props.user} is signed in.</p>
                </div>
            );
        } else {
            return (
                <div className="Pane">
                    <img src={logo}></img>
                    <Button className="login-button" bsStyle="success" bsSize="large"> 
                        Login to Spotify
                    </Button>
                </div>
            );
        }
    }
}

export default LoginPane;