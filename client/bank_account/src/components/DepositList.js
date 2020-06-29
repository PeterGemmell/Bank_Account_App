import React from 'react';
import CurrentAccount from './CurrentAccount.js';
import SavingAccount from './SavingAccount.js';



const DepositList = (props) => {


  const accounts = props.accounts.map((account, index) => {
    return(
      <li key={index} className="component-item">
      <div className="component">
      <CurrentAccount account={account} />
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {accounts}
    </ul>
  )

  const savings = props.savings.map((saving, index) => {
    return(
      <li key={index} className="component-item">
      <div className="component">
      <SavingAccount saving={saving} />
      </div>
      </li>
    )
  })

  return(
    <ul className="component-list">
    {savings}
    </ul>
  )

}


export default DepositList;
