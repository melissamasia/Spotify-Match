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
    this.fetchComparisonData = this.fetchComparisonData.bind(this);
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

  //call to compare libs
  fetchComparisonData() {
    console.log('called fetchComparisonData');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const gatewayURL = 'https://k9dlm45hu8.execute-api.us-east-2.amazonaws.com/Test/comparison';
    var urlToCall = proxyurl + gatewayURL;
    axios.get(urlToCall)
    .then(res => {
      console.log(res.data);
      this.setState({
        resultsComputed: true,
      })
    }).catch(error=> {
      console.log(error);
    });
  };

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
        onSubmitClick={this.fetchComparisonData}
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
