import React, {Component} from 'react';
import CurrentAccount from './CurrentAccount'


class CurrentAccountDetail extends Component {

  constructor(props){
    super(props)
  }

  render(){
    if(!this.props.account){
      return "Loading...."
    }
    return (
      <div className="items">

      <h1> {this.props.account.account1.customerName} </h1>
      <h1> {this.props.account.accountType} </h1>
      <h2> {this.props.account.accountNo} </h2>
      <h2> {this.props.account.currentBalance} </h2>
     </div>
    )
  }
}


export default CurrentAccountDetail;
