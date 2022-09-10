import { motion } from "framer-motion";
import Backdrop from "../BackDrop/Backdrop";
import styles from "./manageproxy.module.scss"

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
  

const ManageProxyModal = ({ handleClose }) => {

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
            <p>yo</p>
            <button onClick={handleClose}>Close</button>
          </motion.div>
      </Backdrop>
    );
  };

  
  export default ManageProxyModal;