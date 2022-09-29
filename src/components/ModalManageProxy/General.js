import React from 'react'
import styles from './general.module.scss';

function General() {
  return (
    <>
    <h1 className={styles.title}>
        General Information
    </h1>
    <div className={styles.contentContainer}>
        <h3>How Proxy Works:</h3>
        <br/>
        <p  className={styles.info}>
            This proxy is used as a portal in which you can vote on your DAOs proposals.
            In order to give this proxy voting power you will need to navigate to the fund tab present on the left nav bar.
            This will allow you to fund the proxy with your DAO's native token, taken directly from the token pool. 
            In order to do this however you will first need to stake TSRY. The amount staked will correspond to the amount of 
            token funded at the current TSRY/Token exchange rate. To get back your TSRY you can will have to cast a vote on
            your DAOs proposals, otherwise you can also defund the proxy anytime by navigating to the defund tab. Note you can only
            fund the proxy is there is a <span>valid proposal,</span> and that proposal is in the <span> pending state</span>. You may also choose to delegate This proxy's
            voting power to a delegate of your choosing. This is also done in the fund tab. Once the proposal is pending you can cast your vote.
        </p>

    </div>
    </>
  )
}

export default General