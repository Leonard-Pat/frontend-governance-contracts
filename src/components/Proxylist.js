import {useState, useEffect} from 'react';
import AddProxy from './AddProxy';
import Proxycard from './Proxycard';
import styles from './proxylist.module.scss';

function Proxylist() {
    return (
            <fieldset>
                <legend><span className={styles.text}data-text="Proxy">Proxy </span>Management</legend>
                <Proxycard/>
                <Proxycard/>
            </fieldset>
    )
        
        

}

export default Proxylist;