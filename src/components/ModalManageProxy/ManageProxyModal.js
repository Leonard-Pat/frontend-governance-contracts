import { motion } from "framer-motion";
import styles from "./manageproxy.module.scss"
import { GiSplitCross } from "react-icons/gi";
import SideNavigation from "./SideNavigation";
import Backdrop from "./Backdrop"

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



const ManageProxyModal = ({ handleClose, proxyName, proxyAddress}) => {

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
         

            <SideNavigation proxyName={proxyName} proxyAddress={proxyAddress} />
      
            <button className={styles.closeButton} onClick={handleClose}> 
            <GiSplitCross size={25} className={styles.icon} />
            </button>
          </motion.div>
      </Backdrop>
    );
  };

  
  export default ManageProxyModal;