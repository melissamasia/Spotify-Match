import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import ResultsPage from './ResultsPage/ResultsPage';
import './App.css';
import axios from 'axios';
import PopupWindow from './PopupWindow';

export const AUTH_STAGES = ['NOT AUTHORIZED', 'IN PROGRESS', 'AUTHORIZED'];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      resultsComputed: false,
      accessToken1: '',
      accessToken2: '',
      renderPopup1: false,
      renderPopup2: false,
      user1AuthStage: AUTH_STAGES[0],
      user2AuthStage: AUTH_STAGES[0],
    }
    this.onLoginClick = this.onLoginClick.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    this.postAccessTokens = this.postAccessTokens.bind(this);
  }
  componentDidUpdate(){
    window.addEventListener('message', (message) => {
      if (this.state.user1AuthStage === AUTH_STAGES[1]) {
        this.setState({
            accessToken1: message.data,
            user1AuthStage: AUTH_STAGES[2],
        });
      } else {
        this.setState({
          accessToken2: message.data,
          user2AuthStage: AUTH_STAGES[2]
        });
      }
    });
  }

  postAccessTokens(){
      console.log('post access tokens called');
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const gatewayURL = 'https://k9dlm45hu8.execute-api.us-east-2.amazonaws.com/Test/comparison';
      var urlToCall = proxyurl + gatewayURL;
      axios.post(urlToCall, {
        token1: this.state.accessToken1,
        token2: this.state.accessToken2
      }).then(res => {
        console.log('success in postAccessToken', res,);
      }).catch(error => {
        console.log(error, 'in postAccessToken');
      })
  }

  onLoginClick(id){
    if (id === 1){
      this.setState({
        user1AuthStage: AUTH_STAGES[1],
        renderPopup1: true,
      })
    } else {
      this.setState({
        user2AuthStage: AUTH_STAGES[1],
        renderPopup2: true,
      })
    }
  }

  renderPopup(){
    return(
      <PopupWindow></PopupWindow>
    )
  }
  
  renderLoginPage(){ 
    return (
      <LoginPage 
        onLoginClick={this.onLoginClick}
        authStage1={this.state.user1AuthStage}
        authStage2={this.state.user2AuthStage}
        onSubmitClick={this.postAccessTokens}
        bothLoggedIn={(this.state.user1AuthStage === AUTH_STAGES[2] && this.state.user2AuthStage === AUTH_STAGES[2])}
      >
      </LoginPage>
    );
  }

  renderResultsPage(){
    return (
      <ResultsPage></ResultsPage>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.resultsComputed ? this.renderLoginPage() : this.renderResultsPage()}
          {this.state.renderPopup1 ? this.renderPopup() : null}
          {this.state.renderPopup2 ? this.renderPopup() : null}
        </header>
      </div>
    );
  }
}

export default App;
