import React, {Component} from 'react';
import {Link} from 'react-router-dom';




class SavingAccount extends Component {
  constructor(props){
    super(props);
  }



  render(){
    return (

      <div className="card">
      <h2 className="cust-name"><b>{this.props.saving.savingCustomerName}</b></h2>
      <h3 className="cust-name">Account Type:{this.props.saving.savingAccountType}</h3>
      <h3 className="cust-name">Account No:{this.props.saving.savingAccountNumber}</h3>
      <h3 className="cust-name">Current Balance: £{this.props.saving.savingBalance}</h3>
      <div className="wrap">
        <div className="left">
        <div className="transfer-activity profile">
    </div>
          <form>
           </form>
         </div>
      </div>
      </div>

    )
  }




}


export default SavingAccount;
