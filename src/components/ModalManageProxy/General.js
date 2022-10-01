import React from 'react'
import styles from './general.module.scss';
import { useBalance } from 'wagmi'
import {useState, useEffect} from 'react';

function General({proxyName, proxyAddress}) {

  const [aaveToken, setAaveToken] = useState(0.0)
  const [tsryToken, setTsryToken] = useState(0.0)

  const tokenToAddress = {
      'UNI': '0xe69F12238C350115Bc067D743C2b147613Fe7924',
      'AAVE': '0x646B3906808892f9876e8E60fa8513C51a4F302c'
    }
    

  const tsryBalance = useBalance({
      addressOrName: proxyAddress,
      token: '0x0DD6d205003cA59DffD7cd9EdCFb8AEe83007FD7',
      chainId: 5,
    })

  const tokenBalance = useBalance({
      addressOrName: proxyAddress,
      token: tokenToAddress[proxyName],
      chainId:5,
    })


  useEffect(() => {
    setAaveToken(parseFloat(tokenBalance.data?.formatted).toFixed(2))
    setTsryToken(parseFloat(tsryBalance.data?.formatted).toFixed(2))
  }, [tokenBalance, tsryBalance])     
  return (
    <>
    <h1 className={styles.title}>
        General Information
    </h1>
    <div className={styles.contentContainer}>
        <h3>How The Proxy Works:</h3>
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
            Below you can see how much TSRY is staked in this proxy as well as the amount of {proxyName} held.
        </p>
            <div className={styles.description}>
                <div className={styles.votingPower}>
                    <h1>{proxyName} Held: </h1>
                    <p>{aaveToken}</p>
                </div>
                <div  className={styles.tsryStaked}>
                    <h1>TSRY Staked: </h1>
                    <p>{tsryToken}</p>
                </div>
            </div>
    </div>
    </>
  )
}

export default General