import React from 'react'
import styles from "./fund.module.scss";

function Fund() {
  return (
    <>
    <h1 className={styles.title}>Fund and Delegate Votes</h1>
    <div className={styles.fundMe}>
        <h1>
            Fund Proxy
        </h1>
        <p className={styles.text}>
            This window funds the proxy with the your DAO's appropriate token.
            To fund the proxy however it requires you to stake TSRY. The amount funded 
            will therefore correspond to the current exchange rate of TSRY/Token. The
            estimated exchange rate is as such:
        </p>
    </div>
    <div className={styles.delegate}>
        <h1>
            Delegate Voting
        </h1>
        <p className={styles.text}> If you wish to delegate your voting rights to another address.
            Please paste in which address you want this proxy's voting power
            to be delegated to in the form below then click on the 'delegate'
            button. Please verify with your DAO if there is are whitelisted
            delegates before doing so.
        </p>
    </div>
    </>

  )
}

export default Fund