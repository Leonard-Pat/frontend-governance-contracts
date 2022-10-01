import styles from './navsystem.module.scss';
import logo from "../../images/fyde.png";
import wip from "../../images/wip.png";
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'

function Navsystem() {
    const { connect } = useConnect({
        connector: new InjectedConnector(),
      })
    const { disconnect } = useDisconnect()
    const { isConnected  } = useAccount()

    return (
        <>
    <header className={styles.hState}>
            <a className={styles.logo} href="/"><img src={logo} alt="logo"/></a>
            <nav>
                <ul className={styles.nav__links}>
                    <li><img className={styles.wip} src={wip} alt="wip"></img><span className ={styles.noLink}>Treasury</span></li>
                    <li><a href="#" data-replace="Governance"><span>Governance</span></a></li>
                    <li><a href="#" data-replace="About Us"><span>About Us</span></a></li>
                    <div className={styles.buttonContainer}>
                    {!isConnected ? (
                            <button className={styles.buttonConnect}  onClick={() => connect()}>
                            Connect Wallet
                            </button>
                        ) : (
                            <button className={styles.buttonDisconnect} onClick={() => disconnect()}>
                            Disconnect
                            </button>
                        )}
                    </div>
                </ul>
                
            </nav>
        </header>
        </>   
    )
        
        

}

export default Navsystem;