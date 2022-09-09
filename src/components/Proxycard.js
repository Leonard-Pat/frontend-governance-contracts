import {useState, useEffect} from 'react';
import styles from './proxycard.module.scss';
import uni from '../images/uni.png';

function Proxycard() {


    return (
        <div className={styles.container}>
            <img src={uni} className={styles.coin}/>
            <h1 className={styles.coinName}>UNI</h1>
        </div>
    )
        
        

}

export default Proxycard;