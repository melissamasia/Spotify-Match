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
                    <LoginPane id={1} authStage={this.props.authStage1} onLoginClick={this.props.onLoginClick}></LoginPane>
                    <LoginPane id={2} authStage={this.props.authStage2} onLoginClick={this.props.onLoginClick}></LoginPane>
                </div>
                <SubmitButton onClick={this.props.onSubmitClick} isDisabled={!this.props.bothLoggedIn}></SubmitButton>
            </div>
          );
      }
}

export default LoginPage;