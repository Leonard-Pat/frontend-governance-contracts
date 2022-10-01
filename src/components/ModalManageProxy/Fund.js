import React from 'react'
import styles from "./fund.module.scss";
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {usePrepareContractWrite, useContractWrite,} from 'wagmi'
import {useState} from 'react';
import { BigNumber } from 'ethers';
import tsrytoken from '../../contracts/TreasuryToken.json'
import voteproxy from '../../contracts/VoteProxyERC20Votes.json';
import Web3 from "web3"


const voteProxyABI = voteproxy.abi
const tsrytokenABI = tsrytoken.abi

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const treasuryTokenAddress = '0x0DD6d205003cA59DffD7cd9EdCFb8AEe83007FD7'

const tsryPrice = 10

function Fund({proxyAddress}) {

    const [stakeAmount, setStakeAmount] = useState('0')
    const [delegateAddress, setDelegate] = useState('')
    const [proposalID, setProposalID] = useState('0x')

    const prepareFundMe = usePrepareContractWrite({
        addressOrName: proxyAddress,
        contractInterface: voteProxyABI,
        functionName: 'fundMe',
        args: [ Web3.utils.toWei(stakeAmount, 'ether'), Web3.utils.hexToNumber(proposalID), tsryPrice],
        chainId: 5,
      })
    
    const prepareApprove = usePrepareContractWrite({
        addressOrName: treasuryTokenAddress,
        contractInterface: tsrytokenABI,
        functionName: 'approve',
        args: [proxyAddress, Web3.utils.toWei(stakeAmount, 'ether')],
        chainId: 5,
    })

    const prepareDelegate = usePrepareContractWrite({
        addressOrName: proxyAddress,
        contractInterface: voteProxyABI,
        functionName: 'delegateVotingRights',
        args: [delegateAddress],
        chainId: 5,
    })

  
    const fundMeTx = useContractWrite(prepareFundMe.config)
    const approveTx = useContractWrite(prepareApprove.config)
    const delegateTx = useContractWrite(prepareDelegate.config)

    const handleStakeAmount = (val) => {
        setStakeAmount(val)
    }

    const handleDelegateVoteAddress = (val) => {
        setDelegate(val)
    }

    const handleProposalID= (val) => {
        setProposalID('0x' + val)
    }


    const handleStake = async () => {
        await approveTx.writeAsync?.().then(async () => 
        await fundMeTx.writeAsync?.() 
        )
        
    }

    const handleDelegateCall = async () => {
        await delegateTx.writeAsync?.()
    }


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
            will therefore correspond to the current exchange rate of TSRY/Token. Please also
            enter a valid proposal ID.
        </p>
        <div className={styles.inputProposal}>
        <ThemeProvider theme={darkTheme}>
        <TextField placeholder="Enter Proposal ID" 
        id="outlined-basic" label="Proposal ID" 
        variant="outlined" sx={{ input: { color: '#F7F8DA' } }}
        onChange={(e) => handleProposalID(e.target.value)}/>
    </ThemeProvider>
        </div>
        <div className={styles.inputTsry}>
        <ThemeProvider theme={darkTheme}>
        <TextField placeholder="Enter TSRY Amount" 
        id="outlined-basic" label="Amount" 
        variant="outlined" sx={{ input: { color: '#F7F8DA' } }}
        onChange={(e) => handleStakeAmount(e.target.value)}/>
    </ThemeProvider>
        </div>
        <button className={styles.fundButton} onClick={() => handleStake()}>
            Fund Proxy
          </button>
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
        <div className={styles.inputsAddress}>
        <ThemeProvider theme={darkTheme}>
        <TextField placeholder="Enter Address"
        id="outlined-basic" label="Delegate" 
        onChange={(e) => handleDelegateVoteAddress(e.target.value)}
        variant="outlined" sx={{ input: { color: '#F7F8DA', width:'300px' } }}/>
    </ThemeProvider>
        </div>
        <button className={styles.fundButton} onClick={handleDelegateCall} >
            Delegate Votes
        </button>

    </div>
    </>

  )
}

export default Fund