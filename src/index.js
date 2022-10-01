import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'


const { chains, provider } = configureChains([chain.goerli], [
  alchemyProvider({ apiKey: '33CyeLi1BoHljETDGX3ThJ-7V1yeZmKD' }),
  publicProvider(),
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <WagmiConfig client={wagmiClient}>
          <App />
        </WagmiConfig>
</>
);


