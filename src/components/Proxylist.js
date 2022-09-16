import {useState} from 'react';
import AddProxy from './AddProxy';
import Proxycard from './Proxycard';
import styles from './proxylist.module.scss';
import uni from '../images/uni.png';
import aave from '../images/aave.png';

function Proxylist() {


    const [modalOpenAddProxy, setModalOpenAddProxy] = useState(false);
    const [modalOpenManageProxy, setModalOpenManageProxy] = useState(false);
    const [selectedProxy, setSelectedProxy] = useState()
    const coins = ['UNI', 'AAVE']
    const coinToIcon = {
        'UNI': uni,
        'AAVE': aave
    }


    return (
            <fieldset style={
            modalOpenManageProxy || modalOpenAddProxy ?
            {overflow: 'visible'} 
            : 
            {overflow: "scroll",
            overflowY: "hidden",
            overflowX: "hidden"}} className={styles.fieldset}>
                <legend><span className={styles.text}>Voting </span>Management</legend>
                <AddProxy setModal={setModalOpenAddProxy} modalOpen={modalOpenAddProxy}/>
                <div className={styles.proxyCard}>
                {coins.map((coin) =>    
                        <Proxycard key={coin} proxy={selectedProxy} setProxy={setSelectedProxy} setModal={setModalOpenManageProxy} modalOpen={modalOpenManageProxy} text={coin} icon={coinToIcon[coin]}/>
                    )}
                </div>
            </fieldset>
    )
        
        

}

export default Proxylist;