import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import LoginContainer from './containers/LoginContainer';
// import CurrentAccountContainer from './containers/CurrentAccountContainer'; // DID HAVE LOGIN CONTAINER BELOW!!
// import HomeContainer from './containers/HomeContainer';
// import Routes from './Routes';

class App extends Component {
  render(){
    return (
      <LoginContainer />

    );
  }
}

export default App;
