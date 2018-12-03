import React, { Component } from 'react';
import './Login.css';
import logo from './logo.png';
import check from './check.png';
import { Button } from 'react-bootstrap';

class LoginPane extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            loggedIn: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState({ isLoading: true });
        //insert ajax call
        var username = this.props.onLoginClick();
        this.setState({ 
            loggedIn: true,
            username,
        });
        setTimeout(() => {
            this.setState({ isLoading: false})
        }, 2000);
        
    }
    
    render(){
        if (this.state.loggedIn){
            return (
                <div className="pane">
                    <img className="check-icon"src={check}></img>
                    <p> {this.state.username} is signed in.</p>
                </div>
            );
        } else {
            return (
                <div className="pane">
                    <img src={logo}></img>
                    <Button 
                        onClick={!this.state.isLoading ? this.handleClick : null } 
                        className="login-button" 
                        bsStyle="success" 
                        bsSize="large"
                        disabled={this.stateisLoading}
                    >
                        {this.state.isLoading ? 'Loading...' : 'Login to Spotify'}
                    </Button>
                </div>
            );
        }
    }
}

export default LoginPane;