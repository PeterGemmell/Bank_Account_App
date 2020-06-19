import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';

class HomeContainer extends Component {

  render(){
  return(
    <Router>
    <Fragment>
    <NavBar/>
    </Fragment>
    </Router>
   )
  }
}

export default HomeContainer;
