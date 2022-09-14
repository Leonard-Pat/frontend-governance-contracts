import { motion } from "framer-motion";
import styles from "./sidenavigation.module.scss"
import { useState, useEffect } from 'react';


const SideNavigation = ({}) => {

    const[selectMenu, setSelectMenu] = useState(1);

    const lightStyle = {
      backgroundColor:'rgb(248, 247, 218)', color:'rgb(20,17,20)'
    }

    const darkStyle = {
      backgroundColor:'rgb(20,17,20)', color:'rgb(248, 247, 218)'
    }
    return (
      <>
      <ul className={styles.navbar}>
          <div onClick={() => setSelectMenu(1)} style={selectMenu === 1 ? lightStyle : darkStyle}>General</div>
          <div onClick={() => setSelectMenu(2)} style={selectMenu === 2 ? lightStyle : darkStyle}>Vote</div>
          <div onClick={() => setSelectMenu(3)} style={selectMenu === 3 ? lightStyle : darkStyle}>Fund Me</div>
          <div onClick={() => setSelectMenu(4)} style={selectMenu === 4 ? lightStyle : darkStyle}>DeFund Me</div>
      </ul>
      <div className={styles.tabView}>
      {selectMenu === 1 ? <h1>Tab1</h1> : <></>} 
      {selectMenu === 2 ? <h1>Tab2</h1> : <></>} 
      {selectMenu === 3 ? <h1>Tab3</h1> : <></>} 
      {selectMenu === 4 ? <h1>Tab4</h1> : <></>} 
      </div>
      
      </>
    )
  };

  
export default SideNavigation;