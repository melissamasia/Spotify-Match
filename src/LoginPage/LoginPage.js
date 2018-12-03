import React, { Component } from 'react';
import Title from '../Title.js';
import LoginPane from './LoginPane.js';
import SubmitButton from './SubmitButton';
import './Login.css';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
          userOneLoggedIn: false,
          userTwoLoggedIn: false,
        }
      }

      render(){
          return(
            <div>
                <Title
                    mainText="Welcome to Spotify Match."
                    subText="Login with a friend to compare Spotify libraries."
                ></Title>
                <div className="pane-row">
                    <LoginPane user="melissamasia" loggedIn={this.state.userOneLoggedIn}></LoginPane>
                    <LoginPane user="tmarij4" loggedIn={this.state.userTwoLoggedIn}></LoginPane>
                </div>
                <SubmitButton isDisabled={!(this.state.userOneLoggedIn && this.state.userTwoLoggedIn)}></SubmitButton>
            </div>
          );
      }
}

export default LoginPage;