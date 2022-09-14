import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DAppProvider, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <DAppProvider config={config}>
          <App />
  </DAppProvider>
</>
);


