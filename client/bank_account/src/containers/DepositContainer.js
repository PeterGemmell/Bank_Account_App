import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Request from '../helpers/request'
import CurrentAccountList from '../components/CurrentAccountList';
import SavingAccountList from '../components/SavingAccountList';
import NavBar from '../NavBar.js';


class DepositContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      accounts: [],
      savings: []
    }

    this.findAccountById = this.findAccountById.bind(this);
    this.findSavingById = this.findSavingById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/accounts')
    .then((data) => {
      this.setState({accounts: data})
    })
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/savings')
    .then((data) => {
      this.setState({savings: data})
    })
  }

  findAccountById(id){
    return this.state.accounts.find((account) => {
      return account.id === parseInt(id);
    });
  }

  findSavingById(id){
    return this.state.savings.find((saving) => {
      return saving.id === parseInt(id);
    });
  }

  render(){

    return(
      <Router>
      <NavBar/>
      <Fragment>
      <Switch>
      <Route render = {(props) => {
        return <CurrentAccountList accounts ={this.state.accounts} />
      }}/>
      <Route render = {(props) => {
        return <SavingAccountList savings = {this.state.savings} />
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }





}


export default DepositContainer;
