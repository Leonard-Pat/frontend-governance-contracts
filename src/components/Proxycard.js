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
            <div>
                <img src={icon} className={styles.coin} alt='Coin Logo'/>
                <h1 className={styles.coinName}>{text}</h1>
            </div>
            <div className={styles.description}>
                    <h1>Price</h1>
                    <p>Description</p>
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