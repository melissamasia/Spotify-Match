import React, { Component } from 'react';
// import axios from 'axios';
import LoginPage from './components/LoginPage/LoginPage';
import PopupWindow from './components/PopupWindow';
import ResultsPage from './components/ResultsPage/ResultsPage';
import { postAccessTokens } from './utils/utils';
import './styles/App.css';

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
      score: 0,
      artists: [],
      songs: []
    }
    this.onLoginClick = this.onLoginClick.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    // this.postAccessTokens = this.postAccessTokens.bind(this);
    this.getResults = this.getResults.bind(this);
    this.renderResultsPage = this.renderResultsPage.bind(this);
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

  // //function that makes call to AWS API Gateway with the auth tokens, receives results from Lambda fxn
  // postAccessTokens(){
  //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //     const gatewayURL = 'https://k9dlm45hu8.execute-api.us-east-2.amazonaws.com/Test/comparison';
  //     var urlToCall = proxyurl + gatewayURL;

  //     var tokens = {
  //       "token1": this.state.accessToken1,
  //       "token2": this.state.accessToken2,
  //     }
  //     axios.post(urlToCall, {
  //       data: tokens
  //     }).then(res => {
  //       this.setState({
  //         score: res.data.score,
  //         artists: res.data.artists,
  //         songs: res.data.songs,
  //         resultsComputed: true,
  //       });
  //     }).catch(error => {
  //       console.log(error, 'in postAccessToken');
  //     })
  // }

  async getResults(){
    const res = await postAccessTokens(this.state.accessToken1, this.state.accessToken2);
    console.log(res);
    this.setState({
      score: res.score,
      artists: res.artists,
      songs: res.songs,
      resultsComputed: true,
    })
  }

  //function to call when "Login button is clicked on LoginPane
  //starts authorization process (opens correct popup, changes state)
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

  //function to render the popup window used in authorization
  renderPopup(){
    return(
      <PopupWindow></PopupWindow>
    )
  }
  
  //View to show before users compare libraries
  renderLoginPage(){ 
    return (
      <LoginPage 
        onLoginClick={this.onLoginClick}
        authStage1={this.state.user1AuthStage}
        authStage2={this.state.user2AuthStage}
        onSubmitClick={this.getResults}
        bothLoggedIn={(this.state.user1AuthStage === AUTH_STAGES[2] && this.state.user2AuthStage === AUTH_STAGES[2])}
      >
      </LoginPage>
    );
  }

  //refactor: do not show artists or songs when the score is 0.
  //View to show when results are computed
  renderResultsPage(){
    return (
      <ResultsPage
        score={this.state.score}
        artists={this.state.artists}
        songs={this.state.songs}
      ></ResultsPage>
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
