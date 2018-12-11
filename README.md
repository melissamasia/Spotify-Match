This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running this project

### Setup
1. Clone the repository
2. Setup a developer account (or regular account) or login with an existing account to Spotify: [https://developer.spotify.com/dashboard/]
3. Click "Create a Client ID"
4. Name the App (Ex: Spotify Match)
5. Write a short description
6. Select Website
7. Select "No" when it asks if you are developing a commercial integration.
8. Check all three boxes on the next window, and click "Submit"

9. Once in the App, click "Edit Settings"
10. Under "Redirect URIs" click "ADD"
11. Add "http://localhost:3000/callback" and "https://localhost:3000/callback"
12. Scroll down and hit "Save"
13. Copy your Client ID

##In the Repository
1. Open the repository in your favorite IDE.
2. In "PopupContent.js" paste your Client ID where it says "insert your client id here"
3. Open up a terminal in the working directory
4. run "npm install"
5. run "yarn start" and the working app should be running in localhost:3000

##Note
If the above steps do not work, it may be because I have taken down the API Gateway that connects the front end to the Lambda function.

