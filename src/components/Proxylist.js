import {useState, useEffect} from 'react';
import AddProxy from './AddProxy';
import Proxycard from './Proxycard';
import styles from './proxylist.module.scss';
import uni from '../images/uni.png';
import aave from '../images/aave.png';
import {useAccount} from 'wagmi';

function Proxylist() {


    const [modalOpenAddProxy, setModalOpenAddProxy] = useState(false);
    const [modalOpenManageProxy, setModalOpenManageProxy] = useState(false);
    const [selectedProxy, setSelectedProxy] = useState()
    const [addProxy, setAddProxy]= useState('')
    const [coinList, setCoinList] = useState([])
    const coinToIcon = {
        'UNI': uni,
        'AAVE': aave
    }

    useEffect(() => {
    if (addProxy === '') {
        return
    } else {
        if (coinList.includes(addProxy)){
            return
        }
        setCoinList( arr => [...arr, addProxy]);
    }
    }, [addProxy])
    
    const { address  } = useAccount()


    return (
            <fieldset style={
            modalOpenManageProxy || modalOpenAddProxy ?
            {overflow: 'visible'} 
            : 
            {overflow: "scroll",
            overflowY: "hidden",
            overflowX: "hidden"}} className={styles.fieldset}>
                <legend><span className={styles.text}>Voting </span>Management</legend>
                <AddProxy addProxy={setAddProxy} setModal={setModalOpenAddProxy} modalOpen={modalOpenAddProxy}/>
                <div className={styles.proxyCard}>
                
                <Proxycard address={'0xaC42BCC3fD4748992bff99c95126FB2323eABb71'} proxy={selectedProxy} setProxy={setSelectedProxy} setModal={setModalOpenManageProxy} modalOpen={modalOpenManageProxy} text={'AAVE'} icon={coinToIcon['AAVE']}/>
                {/* { coinList.length === 0 ? <h1 className={styles.noProxy}>
                    You have no proxies to manage<br></br> Please create new proxy</h1> :
                coinList.map((coin) =>    
                        <Proxycard address={localStorage.getItem(coin)} 
                        key={coin} proxy={selectedProxy} 
                        setProxy={setSelectedProxy} 
                        setModal={setModalOpenManageProxy} 
                        modalOpen={modalOpenManageProxy} 
                        text={coin} 
                        icon={coinToIcon[coin]}/>
                    )} */}
                </div>
            </fieldset>
    )
        
        

}

export default Proxylist;