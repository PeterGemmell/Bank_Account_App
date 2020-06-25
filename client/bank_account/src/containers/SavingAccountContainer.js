import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Request from '../helpers/request'
import SavingAccountList from '../components/SavingAccountList';
import NavBar from '../NavBar.js';


class SavingAccountContainer extends Component {

constructor(props){
  super(props);
  this.state = {
    savings: []
  }

  this.findSavingById = this.findSavingById.bind(this);
}

componentDidMount(){
  const request = new Request();

  request.get('/api/savings')
  .then((data) => {
    this.setState({savings: data})
  })
}

findSavingById(id){
  return this.state.savings.find((saving) => {
    return saving.id === parseInt(id);
  });
}

render(){
  if(!this.state.savings){
    return null
  }

  return(
    <Router>
    <NavBar/>
    <Fragment>
    <Switch>
    <Route render = {(props) => {
      return <SavingAccountList savings ={this.state.savings} />
    }}/>
    </Switch>
    </Fragment>
    </Router>
  )
}


}


export default SavingAccountContainer;
