import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import styles from "./createproxy.module.scss"

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
  

const CreateProxyModal = ({ handleClose, text }) => {

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className={styles.modal} 
            variants={flip}
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

  
  export default CreateProxyModal;