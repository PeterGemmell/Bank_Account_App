import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Request from '../helpers/request'
// import CurrentAccountDetail from './components/CurrentAccountDetail';
import CurrentAccountList from '../components/CurrentAccountList';
import NavBar from '../NavBar.js';


class CurrentAccountContainer extends Component {

 constructor(props) {
   super(props);
   this.state = {
     accounts: []
   }

   this.findAccountById = this.findAccountById.bind(this);
 }

 componentDidMount(){
   const request = new Request();

   request.get('/api/accounts')
   .then((data) => {
     this.setState({accounts: data})
   })
 }

 // handlePost(account){
 //   const request = new Request();
 //   request.post('/api/accounts', account)
 //   .then( () => {
 //     window.location = '/accounts'
 //   })
 //  } // Not currently required as we are not making any edits to our account information.

  findAccountById(id){
    return this.state.accounts.find((account) => {
      return account.id === parseInt(id);
    });
  }


  render(){
    if(!this.state.accounts){
      return null
    }

    return(
      <Router>
      <NavBar/>
      <Fragment>
      <Switch>
      <Route render = {(props) => {
        return <CurrentAccountList accounts ={this.state.accounts} />
      }}/>
      </Switch>
      </Fragment>
      </Router>

    )
  }


}


export default CurrentAccountContainer;
