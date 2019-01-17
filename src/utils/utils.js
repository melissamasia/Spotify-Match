import axios from 'axios';

 //constants
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const gatewayURL = 'https://k9dlm45hu8.execute-api.us-east-2.amazonaws.com/Test/comparison';
const urlWithProxy = proxyurl + gatewayURL;
  
//function that makes call to AWS API Gateway with the auth tokens, receives results from Lambda fxn
export function postAccessTokens(token1, token2){

  var tokens = {
    "token1": token1,
    "token2": token2,
  }

  axios.post(urlWithProxy, {
    data: tokens
    }).then(res => {
      return ({
        score: res.data.score,
        artists: res.data.artists,
        songs: res.data.songs,
      });
    }).catch(error => {
      console.log(error, 'in postAccessToken');
    })
}

   
export function getAuthURL(){
  var client_id = 'insert your client id here';
  var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123';
  return url;
}