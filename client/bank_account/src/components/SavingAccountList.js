import React from 'react';
import SavingAccount from './SavingAccount.js';


const SavingAccountList = (props) => {

  // if(props.savings.length === 0){
  //   return(<p>Loading....</p>)
  // }

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


export default SavingAccountList;
