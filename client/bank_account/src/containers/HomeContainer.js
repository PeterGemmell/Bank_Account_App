import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CurrentAccountContainer from './CurrentAccountContainer';

class HomeContainer extends Component {


  render(){
  return(
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
    <Route path="/CurrentAccount" component={CurrentAccountContainer} />
    <div className="card">
      <h2><u>Welcome to your online account</u></h2>
      <h3>To view information on your accounts or to make a deposit, please select an option from the above menu.</h3>
      <h5>Warm regards, G&A Online Bank</h5>
    <div className="wrap">
      <div className="left">
        <form>
         </form>
       </div>
    </div>
    </div>
    </Switch>
    </Fragment>
    </Router>

   )
  }
}




export default HomeContainer;
