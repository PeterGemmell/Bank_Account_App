import React, { Component } from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import history from './history';
import DepositContainer from './containers/DepositContainer';
import CurrentAccountContainer from './containers/CurrentAccountContainer';
import NavBar from './NavBar.js';
// So we will import the navbar in here. Render it below. Also add in other containers.


class Routes extends Component {
  render(){
    return (
      <Router history ={history}>
      <Switch>
      <Route path='/' exact component={LoginContainer} />
      <Route path='/home' component={HomeContainer} />
      <Route path='/account' component={CurrentAccountContainer} />
      </Switch>
      </Router>
    )
  }
}


export default Routes;
