import React, {Component} from 'react';
import SavingAccount from './SavingAccount'


class SavingAccountDetail extends Component {

  constructor(props){
    super(props)
  }

  render(){
    // if(!this.props.saving){
    //   return "Loading...."
    // }
    return (
      <div className="card">

      <h1> {this.props.saving.savingCustomerName} </h1>
      <h1> {this.props.saving.savingAccountType} </h1>
      <h2> {this.props.saving.savingAccountNumber} </h2>
      <h2> {this.props.saving.savingBalance} </h2>
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


export default SavingAccountDetail;
