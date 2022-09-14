import { motion } from "framer-motion";
import Backdrop from "../BackDrop/Backdrop";
import styles from "./manageproxy.module.scss"
import { useState, useEffect } from 'react';
import { GiSplitCross } from "react-icons/gi";
import SideNavigation from "./SideNavigation";

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
  

const ManageProxyModal = ({ handleClose, coinName}) => {
  console.log(coinName)

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
            <SideNavigation/>
            <h1>{coinName}</h1>
            <button onClick={handleClose}> 
            <GiSplitCross size={25} className={styles.icon} />
            </button>
          </motion.div>
      </Backdrop>
    );
  };

  
  export default ManageProxyModal;