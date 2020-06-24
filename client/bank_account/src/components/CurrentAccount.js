import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class CurrentAccount extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (

      <div className="items">
      <p><b><u>{this.props.account.customerName}</u></b></p>
      <p>Account Type:{this.props.account.accountType}</p>
      <p>Account No:{this.props.account.accountNo}</p>
      <p>Current Balance:{this.props.account.currentBalance}</p>
      </div>
    )
  }




}


export default CurrentAccount;
