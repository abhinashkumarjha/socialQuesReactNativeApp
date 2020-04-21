# socialQuesReactNativeApp
A social app demo where people can ask questions. *This app doesn't have any persistent storage and uses static data for login info. and intial set of questions.*

# Directory structure
- **App.js:** Contains the different navigators and main app container.
- **src/component:** Contains custom reuseable react componnents.
- **src/screens:** Contains all the different screens required.
- **src/context:** contains all the context declarations.
- **src/data:** contains the static data powering apps. *user.js* includes the valid login credentials and *questions.js* has all the initial set of questions required.
# How to run
**local ( Development Server )**
1. git clone the repo and get into it.
2. run `npm install` to install all the dependicies.
3. run `npm start` to start the local server.
4. Download **expo client** from playstore/Appstore into your phone and scan the QR code generated.

**distribution ( Production build )**
1. follow the steps mentioned in the [expo documentation](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)
