import styles from './proxycard.module.scss';
import { motion, AnimatePresence} from "framer-motion"
import ManageProxyModal from './ModalManageProxy/ManageProxyModal';
import { useBalance } from 'wagmi'
import {useState, useEffect} from 'react';



function Proxycard({setModal, modalOpen, icon, text, proxy, setProxy, address}) {

    const [aaveToken, setAaveToken] = useState(0.0)
    const [tsryToken, setTsryToken] = useState(0.0)

    const tokenToAddress = {
        'UNI': '0xe69F12238C350115Bc067D743C2b147613Fe7924',
        'AAVE': '0x646B3906808892f9876e8E60fa8513C51a4F302c'
      }
      

    const tsryBalance = useBalance({
        addressOrName: address,
        token: '0x0DD6d205003cA59DffD7cd9EdCFb8AEe83007FD7',
        chainId: 5,
      })

    const tokenBalance = useBalance({
        addressOrName: address,
        token: tokenToAddress[text],
        chainId:5,
      })


    useEffect(() => {
      setAaveToken(parseFloat(tokenBalance.data?.formatted).toFixed(2))
      setTsryToken(parseFloat(tsryBalance.data?.formatted).toFixed(2))
    }, [tokenBalance, tsryBalance])      


    const close = () => setModal(false);
    const open = () => {
        setModal(true)
        setProxy(text);
    } 


    return (
        <>
        <motion.div  
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        onClick={() =>
            (modalOpen ? close() : open())}
         className={styles.container}>
            <div className={styles.heading}>
                <img src={icon} className={styles.coin} alt='Coin Logo'/>
                <h1 className={styles.coinName}>{text}</h1>
            </div>
            <div className={styles.description}>
                <div className={styles.votingPower}>
                    <h1>{text} Held: </h1>
                    <p>{aaveToken}</p>
                </div>
                <div  className={styles.tsryStaked}>
                    <h1>TSRY Staked: </h1>
                    <p>{tsryToken}</p>
                </div>
            </div>
        </motion.div>
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {modalOpen && <ManageProxyModal modalOpen={modalOpen} handleClose={close} proxyName={proxy} proxyAddress={address}/>}
        </AnimatePresence>
        </>
    )
        
        
}

export default Proxycard;