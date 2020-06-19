import React, { Component } from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import history from './history';
import DepositContainer from './containers/DepositContainer';

// So we will import the navbar in here. Render it below. Also add in other containers.


class Routes extends Component {
  render(){
    return (
      <Router history ={history}>
      <Switch>
      <Route path='/' exact component={LoginContainer} />
      <Route path='/home' component={HomeContainer} />
      </Switch>
      </Router>
    )
  }
}


export default Routes;
