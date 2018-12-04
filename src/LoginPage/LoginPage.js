import React, { Component } from 'react';
import Title from '../Title.js';
import LoginPane from './LoginPane.js';
import SubmitButton from './SubmitButton';
import './Login.css';

class LoginPage extends Component {

    render(){
          return(
            <div>
                <Title
                    mainText="Welcome to Spotify Match."
                    subText="Login with a friend to compare Spotify libraries."
                ></Title>
                <div className="pane-row">
                    <LoginPane id={1} authInProcess={this.props.authInProcess1} onLoginClick={this.props.onLoginClick1}></LoginPane>
                    <LoginPane id={2} authInProcess={this.props.authInProcess2} onLoginClick={this.props.onLoginClick2}></LoginPane>
                </div>
                <SubmitButton onClick={this.props.onSubmitClick} isDisabled={!this.props.bothLoggedIn}></SubmitButton>
            </div>
          );
      }
}

export default LoginPage;