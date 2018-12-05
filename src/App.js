import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import ResultsPage from './ResultsPage/ResultsPage';
import './App.css';
import axios from 'axios';
import PopupWindow from './LoginPage/PopupWindow';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      resultsComputed: false,
      accessToken1: '',
      accessToken2: '',
      renderPopup1: false,
      renderPopup2: false,
    }
    this.getUser = this.getUser.bind(this);
    // this.getAccessToken = this.getAccessToken.bind(this);
    this.onLoginClick1 = this.onLoginClick1.bind(this);
    this.onLoginClick2 = this.onLoginClick2.bind(this);
    this.renderPopup1 = this.renderPopup1.bind(this);
    this.renderPopup2 = this.renderPopup2.bind(this);
    this.fetchComparisonData = this.fetchComparisonData.bind(this);
  }

  componentDidUpdate(){
    window.addEventListener('message', function(message){
      //assign access token
    })
  }

  //call to get Access Token
  getAccessToken(){
  //return username
      console.log('called getAccessToken');
      if (this.state.accessToken1 === ''){
        this.setState({
          accessToken1: 'accesstoken1',
        });
      } else {
        this.setState({
          accessToken2: 'accesstoken2',
        });
      }
      return 'success';
  };

  getUser(){
      this.setState({renderPopup: true})
      // var response = this.getAccessToken();
      // if (response === 'success'){
      //   return 'melissamasia';
      // } else {
      //   return 'error gathering user';
      // }
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

  onLoginClick1(){
    this.setState({ renderPopup1: true });
  }

  onLoginClick2(){
    this.setState({ renderPopup2: true });
  }

  renderPopup1(){
    return(
      <PopupWindow>
        test
      </PopupWindow>
    )
  }

  renderPopup2(){
    return(
      <PopupWindow></PopupWindow>
    )
  }
  
  renderLoginPage(){ 
    return (
      <LoginPage 
        onLoginClick1={this.onLoginClick1}
        onLoginClick2={this.onLoginClick2}
        authInProcess1={this.state.renderPopup1}
        authInProcess2={this.state.renderPopup2}
        onSubmitClick={this.fetchComparisonData}
        bothLoggedIn={(this.state.accessToken1 !== '' && this.state.accessToken2 !== '')}
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
          {this.state.renderPopup1 ? this.renderPopup1() : null}
          {this.state.renderPopup2 ? this.renderPopup2() : null}
        </header>
      </div>
    );
  }
}

export default App;
