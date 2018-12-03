import React, { Component } from 'react';
import './Login.css';
import logo from './logo.png';
import check from './check.png';
import { Button } from 'react-bootstrap';

class LoginPane extends Component {
    
    handleClick(){
        this.setState({ isLoading: true });
        //insert ajax call
        setTimeout(() => {
            this.setState({ isLoading: false})
        }, 2000);
    }
    
    render(){
        if (this.props.loggedIn){
            return (
                <div className="pane">
                    <img className="check-icon"src={check}></img>
                    <p> {this.props.user} is signed in.</p>
                </div>
            );
        } else {
            return (
                <div className="pane">
                    <img src={logo}></img>
                    <Button onClick={this.handleClick} className="login-button" bsStyle="success" bsSize="large"> 
                        Login to Spotify
                    </Button>
                </div>
            );
        }
    }
}

export default LoginPane;