import React, { Component } from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import history from './history';
import DepositContainer from './containers/DepositContainer';
import CurrentAccountContainer from './containers/CurrentAccountContainer';
import SavingAccountContainer from './containers/SavingAccountContainer';
import NavBar from './NavBar.js';


class Routes extends Component {
  render(){
    return (
      <Router history ={history}>
      <Switch>
      <Route path='/' exact component={LoginContainer} />
      <Route path='/home' component={HomeContainer} />
      <Route path='/account' component={CurrentAccountContainer} />
      <Route path='/saving' component={SavingAccountContainer} />
      </Switch>
      </Router>
    )
  }
}


export default Routes;
