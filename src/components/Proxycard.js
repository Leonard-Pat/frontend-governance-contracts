import {useState, useEffect} from 'react';
import styles from './proxycard.module.scss';
import { motion, AnimatePresence} from "framer-motion"
import ManageProxyModal from "./ModalManageProxy/ManageProxyModal";


function Proxycard(props, {text, icon}) {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
    props.func(modalOpen);

    return (
        <>
        <motion.div  
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        onClick={() => (modalOpen ? close() : open())}
         className={styles.container}>
            <div>
                <img src={icon} className={styles.coin} alt='Coin Logo'/>
                <h1 className={styles.coinName}>{text}</h1>
            </div>
            <div>
                    <h1>hey</h1>
            </div>
            <div>
                    <h1>yo</h1>
            </div>

        </motion.div>
        <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}>
                {modalOpen && <ManageProxyModal modalOpen={modalOpen} handleClose={close}/>}
        </AnimatePresence>
        </>
    )
        
        

}

export default Proxycard;