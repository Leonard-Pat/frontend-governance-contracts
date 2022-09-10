import {useState, useEffect} from 'react';
import AddProxy from './AddProxy';
import Proxycard from './Proxycard';
import styles from './proxylist.module.scss';
import uni from '../images/uni.png';
import aave from '../images/aave.png';

function Proxylist() {


    const [modalCreateOpen, setModalCreateOpen] = useState(false);
    const [modalManageOpen, setModalManageOpen] = useState(false);

    const modalOpenCreate= (data) => {
        if (data) {
            setModalCreateOpen(true)
        } else {
            setTimeout(() => {setModalCreateOpen(false)}, 1000);
        }
    
      }

      const modalOpenManage= (data) => {
        if (data) {
            setModalManageOpen(true)
        } else {
            setTimeout(() => {setModalManageOpen(false)}, 1000);
        }
    
      }

    return (
            <fieldset style={modalCreateOpen || modalManageOpen ? {overflow: 'unset'} : 
            { 
                overflow: "scroll",
                overflowX: "hidden",
                overflowY: "hidden"}}>
                <legend><span className={styles.text}data-text="Proxy">Voting </span>Management</legend>
                <AddProxy func={modalOpenCreate}/>
                <Proxycard func ={modalOpenManage} text={'UNI'} icon={uni}/>
                <Proxycard func ={modalOpenManage} text={'AAVE'} icon={aave}/>
            </fieldset>
    )
        
        

}

export default Proxylist;