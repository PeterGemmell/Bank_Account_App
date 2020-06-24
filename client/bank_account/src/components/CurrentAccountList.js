import React from 'react';
import CurrentAccount from './CurrentAccount.js';


const CurrentAccountList = (props) => {

  if(props.accounts.length === 0){
    return(<p>Loading....</p>)
  }

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
}


export default CurrentAccountList;
