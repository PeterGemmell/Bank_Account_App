import React from 'react';
import CurrentAccount from './CurrentAccount.js';


const CurrentAccountList = (props) => {

  if(props.accounts.length === 0){
    return(<p>Loading....</p>)
  }

  const accounts = props.accounts.map((account1, index) => {
    return(
      <li key={index} className="component-item">
      <div className="component">
      <CurrentAccount account={account1} />
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
