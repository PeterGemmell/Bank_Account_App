import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render(){
    return (
      
      <LoginContainer />
    );
  }
}
export default App;
