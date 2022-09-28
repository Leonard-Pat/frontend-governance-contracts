import styles from './proxycard.module.scss';
import { motion, AnimatePresence} from "framer-motion"
import ManageProxyModal from './ModalManageProxy/ManageProxyModal';


function Proxycard({setModal, modalOpen, icon, text, proxy, setProxy}) {

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
                    <p>0</p>
                </div>
                <div  className={styles.tsryStaked}>
                    <h1>TSRY Staked: </h1>
                    <p>0</p>
                </div>
            </div>
        </motion.div>
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {modalOpen && <ManageProxyModal modalOpen={modalOpen} handleClose={close} proxyName={proxy}/>}
        </AnimatePresence>
        </>
    )
        
        
}

export default Proxycard;