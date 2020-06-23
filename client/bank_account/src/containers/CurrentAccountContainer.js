import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Request from '../helpers/request'
import NavBar from '../NavBar.js';

class CurrentAccountContainer extends Component {

render(){
  return(
    <Router>
    <NavBar />
    <Fragment>
    <div className="card">
      <h2>💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵💵</h2>
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


}


export default CurrentAccountContainer;
