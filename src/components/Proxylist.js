import {useState} from 'react';
import AddProxy from './AddProxy';
import Proxycard from './Proxycard';
import styles from './proxylist.module.scss';
import uni from '../images/uni.png';
import aave from '../images/aave.png';

function Proxylist() {


    const [modalOpenAddProxy, setModalOpenAddProxy] = useState(false);
    const [modalOpenManageProxy, setModalOpenManageProxy] = useState(false);
    const coins = ['UNI', 'AAVE']
    const coinToIcon = {
        'UNI': uni,
        'AAVE': aave
    }


    return (
            <fieldset style={
            modalOpenManageProxy || modalOpenAddProxy ?
            {overflow: 'unset'} 
            : 
            {overflow: "scroll",
            overflowX: "hidden",
            overflowY: "hidden"}}>
                <legend><span className={styles.text}data-text="Proxy">Voting </span>Management</legend>
                <AddProxy setModal={setModalOpenAddProxy} modalOpen={modalOpenAddProxy}/>
                {coins.map((coin) =>    
                        <Proxycard key={coin} setModal={setModalOpenManageProxy} modalOpen={modalOpenManageProxy} text={coin} icon={coinToIcon[coin]}/>
                    )}
            </fieldset>
    )
        
        

}

export default Proxylist;