import {useState, useEffect} from 'react';
import styles from './navsystem.module.scss';
import logo from "../images/fyde.png";
import wip from "../images/wip.png";

function Navsystem() {
    const [hState,sethState] = useState("top")

    useEffect(()=>{
        var lastVal = 0
        window.onscroll = function(){
            let y = window.scrollY
            if(y > lastVal){sethState("down")}
            if(y < lastVal) {sethState("up")}
            if(y === 0) {sethState("top")}
            lastVal = y
        }        
    },[])

    return (
        <>
    <header className={styles.hState}>
            <a className={styles.logo} href="/"><img src={logo} alt="logo"/></a>
            <nav>
                <ul className={styles.nav__links}>
                    <li><img className={styles.wip} src={wip}></img><span className ={styles.noLink}>Treasury</span></li>
                    <li><a href="#" data-replace="Governance"><span>Governance</span></a></li>
                    <li><a href="#" data-replace="About Us"><span>About Us</span></a></li>
                </ul>
                
            </nav>
        </header>
        </>   
    )
        
        

}

export default Navsystem;