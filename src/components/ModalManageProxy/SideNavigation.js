import { motion } from "framer-motion";
import styles from "./sidenavigation.module.scss"
import { useState } from 'react';
import VoteTab from './VoteTab';


const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      when: "beforeChildren",
      staggerChildren: 5,
      duration: 1,
    },
}
}
    const lightStyle = {
      backgroundColor:'rgb(248, 247, 218)', color:'rgb(20,17,20)'
    }

    const darkStyle = {
      backgroundColor:'rgb(20,17,20)', color:'rgb(248, 247, 218)'
    }
const SideNavigation = ({}) => {

    const[selectMenu, setSelectMenu] = useState(1);
    return (
      <>
      <ul className={styles.navbar}>
          <motion.div variants={fade} onClick={() => setSelectMenu(1)} style={selectMenu === 1 ? lightStyle : darkStyle}>General</motion.div>
          <motion.div variants={fade} onClick={() => setSelectMenu(2)} style={selectMenu === 2 ? lightStyle : darkStyle}>Vote</motion.div>
          <motion.div variants={fade} onClick={() => setSelectMenu(3)} style={selectMenu === 3 ? lightStyle : darkStyle}>Fund</motion.div>
          <motion.div variants={fade} onClick={() => setSelectMenu(4)} style={selectMenu === 4 ? lightStyle : darkStyle}>DeFund</motion.div>
      </ul>
      <div className={styles.tabView}>
      {selectMenu === 1 ?  <h1>Tab1</h1>: <></>} 
      {selectMenu === 2 ? <VoteTab></VoteTab> : <></>} 
      {selectMenu === 3 ? <h1>Tab3</h1> : <></>} 
      {selectMenu === 4 ? <h1>Tab4</h1> : <></>} 
      </div>
      
      </>
    )
  };

  
export default SideNavigation;