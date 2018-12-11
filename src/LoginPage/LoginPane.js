import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import check from './check.png';
import logo from './logo.png';

const AUTH_STAGES = ['NOT AUTHORIZED', 'IN PROGRESS', 'AUTHORIZED'];

class LoginPane extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.renderLoggedIn = this.renderLoggedIn.bind(this);
        this.renderNotLoggedIn = this.renderNotLoggedIn.bind(this);
        this.renderLogInProcess = this.renderLogInProcess.bind(this);
    }
    
    //function called when Login button is clicked
    handleClick(){
        this.props.onLoginClick(this.props.id);
    }
    
    //View to show on the Login Pane when a user is authorized
    renderLoggedIn(){
        return(
            <div className="pane">
                    <img alt='' className="check-icon"src={check}></img>
                    <p> User {this.props.id} is signed in.</p>
            </div>
        );
    }

    //View to show on the Login Pane when a user has not yet signed in
    renderNotLoggedIn(){
        return (
            <div className="pane">
                <img alt='' src={logo}></img>
                <Button 
                    onClick={this.handleClick} 
                    className="login-button" 
                    bsStyle="success" 
                    bsSize="large"
                >
                    Login to Spotify
                </Button>
            </div>
        );  
    }

    //View to show when authorization is in process
    renderLogInProcess(){
        return(
            <div className="pane">
                <p>Authorizing...</p>
            </div>
        );
    }

    render(){
        if (this.props.authStage === AUTH_STAGES[2]){
            return this.renderLoggedIn();
        } else if(this.props.authStage === AUTH_STAGES[1]) {
            return this.renderLogInProcess();
        } else {
            return this.renderNotLoggedIn();
        }
    }
}

export default LoginPane;