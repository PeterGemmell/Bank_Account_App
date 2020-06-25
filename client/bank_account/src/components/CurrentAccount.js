import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class CurrentAccount extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (

      <div className="card">
      <h2 className="cust-name"><b>{this.props.account.customerName}</b></h2>
      <h3 className="cust-name">Account Type:{this.props.account.accountType}</h3>
      <h3 className="cust-name">Account No:{this.props.account.accountNo}</h3>
      <h3 className="cust-name">Current Balance: £{this.props.account.currentBalance}</h3>
      <div className="wrap">
        <div className="left">
          <form>
           </form>
         </div>
      </div>
      </div>
    )
  }




}


export default CurrentAccount;
