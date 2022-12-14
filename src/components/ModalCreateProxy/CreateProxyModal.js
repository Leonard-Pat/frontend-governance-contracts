import { motion } from "framer-motion";
import { useState } from "react";
import Backdrop from "../BackDrop/Backdrop";
import styles from "./createproxy.module.scss"
import { GiSplitCross } from "react-icons/gi";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select'
import {   usePrepareContractWrite,
  useContractWrite,
  useAccount
 } from 'wagmi'
 import factoryABI from '../../contracts/VoteProxyFactory.json'
 import { ethers } from "ethers";


const factoryAbi = factoryABI.abi

const scale = {
  hidden: {
    transform:'scaleY(0)',
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  visible: {
    transform:'scaleY(1)',
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    transform:'scaleY(0)',
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      duration: 2,
    },
}
}

const options = [
  { value: 'UNI', label: 'UNI' },
  { value: 'AAVE', label: 'AAVE' },
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#83ddbc' : '#F7F8DA',
    backgroundColor: state.isFocused ? "rgba(131,221,188, 0.3)" : null,
    
  }),
     menuList: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgb(20,17,20)',
    border: '1px solid #F7F8DA',
    borderTop: 'none',
   
  }),
}

const CreateProxyModal = ({ handleClose, addProxy }) => {

  const { address  } = useAccount()
  
  const [selectedOption, setSelectedOption] = useState();
  const tokenToGovernance = {
    'UNI': true,
    'AAVE': false
  } 

  const tokenToAddress = {
    'UNI': '0xe69F12238C350115Bc067D743C2b147613Fe7924',
    'AAVE': '0x646B3906808892f9876e8E60fa8513C51a4F302c'
  }
  
  const tokenPoolAddress = '0xa404b1F6654a309a62d7501c9F93D717fee5a12B'

  const { config } = usePrepareContractWrite({
    addressOrName: '0xaE567e68ac0078db460E1ACB741c9Fc334970299',
    contractInterface: factoryAbi,
    functionName: 'createERC20VotesProxy',
    args: [tokenToAddress[selectedOption], tokenPoolAddress, tokenToGovernance[selectedOption]],
    chainId: 5,
  })

  const {writeAsync} = useContractWrite(config)



  const provider = new ethers.providers.WebSocketProvider(
    `wss://eth-goerli.g.alchemy.com/v2/33CyeLi1BoHljETDGX3ThJ-7V1yeZmKD`
  )
  
  
  const contract = new ethers.Contract('0xaE567e68ac0078db460E1ACB741c9Fc334970299', factoryAbi, provider)

  contract.on('VoteProxyDeployed', (proxy, _governanceToken, event) => {
    let info = {
      proxyAddress: proxy,
      governanceToken: _governanceToken,
      data: event,
    }
    localStorage.setItem(`${selectedOption}`, info.proxyAddress)
  })

  const handleCreate = async () => {
    await writeAsync?.().then(() => {
      addProxy(selectedOption)
      handleClose()
    })
    
  }
    


    return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={styles.modal}
          variants={scale}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className={styles.closeButton} onClick={handleClose}>
            <GiSplitCross size={20} className={styles.icon} />
          </button>
          <motion.h1 variants={fade} className={styles.header}>
            Creation Wizard
          </motion.h1>
          <motion.div variants={fade} className={styles.textContainer}>
            <p className={styles.warningText}>
              Please make sure you have read and understood the following{" "}
              <span>before</span> continuing:
              <br></br>
              <br></br>
              <p className={styles.mainBody}>
                Please select from the drop down menu which token you would like
                to create the proxy for. Please also select whether you would
                like to vote on on-chain or off-chain proposals. You will only
                be allowed to create two proxies per governance token. One for
                off-chain voting and one for on-chain voting. If you're DAO only
                supports one type then please verify you have selected the
                correct one. If you are unsure as to which to pick please check
                with your DAO's community.
                <br></br>
                <br></br>
                This process will create a smart contract (proxy) to enable you
                to vote on your DAO's proposals. As such it will cost some eth
                to create and is <span>permanent</span> so please verify that
                all the details are correct upon creation. Once created, you
                will see your proxy listed under the 'voting management' window
                in the governance tab of Fyde's website.
                <br></br>
                <br></br>
                Once completed click on the 'create proxy' button at the bottom
                of this window.
              </p>
            </p>
          </motion.div>
          <motion.div variants={fade} className={styles.createWindow}>
          <div className={styles.votingMechanism}>
            <p>Voting Method: </p>
          <FormControl >
          <RadioGroup className={styles.Radio} row={true}>
                <FormControlLabel value="On-Chain" control={<Radio  sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 14,
                      },
                      color: '#F7F8DA',
                      '&.Mui-checked': {
                        color: '#83ddbc',
                      },
                    }}/>} label="On-Chain" />
                <FormControlLabel value="Off-Chain" control={<Radio sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 14,
                      },
                      color: '#F7F8DA',
                      '&.Mui-checked': {
                        color: '#83ddbc',
                      },
                    }} />} label="Off-Chain" />
              </RadioGroup>
              </FormControl>  
          </div>
          <div className={styles.governanceToken}>
            <p>Governance Token:</p>
                  <div style={{width: '300px'}}>
                <Select onChange={(e) =>{setSelectedOption(e.value)}} styles={customStyles} options={options} />
                  </div>
            </div> 

            
          </motion.div>
          <motion.button variants={fade} className={styles.createButton} onClick={handleCreate}>
            Create Proxy
          </motion.button>
        </motion.div>
      </Backdrop>
    );
  };

  
  export default CreateProxyModal;