import {useState, AnimatePresence} from 'react';
import styles from './addproxy.module.scss';
import { motion } from "framer-motion"
import CreateProxyModal from './ModalCreateProxy/CreateProxyModal';

function AddProxy() {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
    return (
        <>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => (modalOpen ? close() : open())}
          className={styles.text}>
              
              <p>Create New Proxy</p>
              
        </motion.div>
        {modalOpen && <CreateProxyModal modalOpen={modalOpen} handleClose={close} />}
        
        </>
    );
        
        

}

export default AddProxy;