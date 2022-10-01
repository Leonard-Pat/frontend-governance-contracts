import React from 'react'
import styles from "./defund.module.scss";
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import voteproxyabi from '../../contracts/VoteProxyERC20Votes.json';
const voteProxyABI = voteproxyabi.abi

function Defund({proxyAddress}) {

  const { config } = usePrepareContractWrite({
    addressOrName: proxyAddress,
    contractInterface: voteProxyABI,
    functionName: 'deFundMe',
    chainId: 5,
  })
  
  const { writeAsync } = useContractWrite(config)

  const handleDefund = async () => {
    await writeAsync?.()
  }

  return (
    <>
    
        <h1 className={styles.title }>DeFund Proxy</h1>
    <div className={styles.mainContent}>
        <p className={styles.info}> 
            This tab allows you to remove all funds associated to this proxy.
            This will return any TSRY staked in this proxy and remove any associated 
            DAO token. Please be aware that if you preform this action during the pending 
            state of any proposal your voting power may not count.
        </p>
        <button className={styles.defundButton} onClick={handleDefund}>
            Remove All Funds
        </button>
    </div>
    </>
  )
}

export default Defund;