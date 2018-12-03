import React, { Component } from 'react';
import Title from './Title.js';
import LoginPane from './LoginPane.js';
import SubmitButton from './SubmitButton';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userOneLoggedIn: true,
      userTwoLoggedIn: true,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title></Title>
          <div className="Pane-row">
            <LoginPane user="melissamasia" loggedIn={this.state.userOneLoggedIn}></LoginPane>
            <LoginPane user="tmarij4" loggedIn={this.state.userTwoLoggedIn}></LoginPane>
          </div>
          <SubmitButton isDisabled={!(this.state.userOneLoggedIn && this.state.userTwoLoggedIn)}></SubmitButton>
        </header>
      </div>
    );
  }
}

export default App;
