import {useState} from 'react';
import styles from './addproxy.module.scss';
import { motion, AnimatePresence } from "framer-motion"
import CreateProxyModal from './ModalCreateProxy/CreateProxyModal';

function AddProxy(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
    props.func(modalOpen);

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
            exitBeforeEnter={true}
            onExitComplete={() => null}>
            {modalOpen && <CreateProxyModal modalOpen={modalOpen} handleClose={close}/>}
        </AnimatePresence>
        </>
    );
        
        

}

export default AddProxy;

