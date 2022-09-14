import {useState} from 'react';
import styles from './addproxy.module.scss';
import { motion, AnimatePresence } from "framer-motion"
import CreateProxyModal from './ModalCreateProxy/CreateProxyModal';

function AddProxy({setModal, modalOpen}) {


    const close = () => setModal(false);
    const open = () => setModal(true);
    

    return (
        <>
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => (modalOpen ? close() : open())}
          className={styles.text}>
              
              <p>Create New Proxy</p>
              
        </motion.div>
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {modalOpen && <CreateProxyModal modalOpen={modalOpen} handleClose={close}/>}
        </AnimatePresence>
        </>
    );
        
        

}

export default AddProxy;

