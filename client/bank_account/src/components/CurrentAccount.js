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
      <br>
      </br>
      <h3><b><u>Transactions</u></b></h3>
      <div className="wrap">
        <div className="left">
          <form>
          <table className="fixed_header">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>From</th>
      <th>To</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Automatic</td>
      <td>£5.99</td>
      <td>Current Account</td>
      <td>Boots Chemist Ltd</td>
      <td>30/05/2020</td>
    </tr>
    <tr>
      <td>Automatic</td>
      <td>£20.50</td>
      <td>Current Account</td>
      <td>Nandos</td>
      <td>28/05/2020</td>
    </tr>
    <tr>
      <td>Automatic</td>
      <td>£100</td>
      <td>Current Account</td>
      <td>Aberdeen Asset MGMT</td>
      <td>26/05/2020</td>
    </tr>
    <tr>
      <td>Automatic</td>
      <td>£20</td>
      <td>Current Account</td>
      <td>Shell</td>
      <td>15/05/2020</td>
    </tr>
  </tbody>
</table>
           </form>
         </div>
      </div>
      </div>

    )
  }




}


export default CurrentAccount;
