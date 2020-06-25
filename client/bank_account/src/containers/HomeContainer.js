import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CurrentAccountContainer from './CurrentAccountContainer';
import SavingAccountContainer from './SavingAccountContainer';
// import DepositContainer from './DepositContainer';
// import LoginContainer from './LoginContainer';


const HomeContainer = () => {

  return(
    <Router>
    <NavBar />
    <Fragment>
    <Route path="/account" component={CurrentAccountContainer} />
    <Route path="/saving" component={SavingAccountContainer} />
    <div className="card">
      <h2>Welcome to your online account Peter.</h2>
      <h3>To view information on your accounts or to make a deposit, please select an option from the above menu.</h3>
      <br>
      </br>
      <h5><b>Warm regards, G&A Online Bank</b></h5>
    <div className="wrap">
      <div className="left">
        <form>
         </form>
       </div>
    </div>
    </div>
    </Fragment>
    </Router>

   )

}




export default HomeContainer;
