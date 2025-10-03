// import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletConnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import Airdrop from "./Airdrop"
// import { clusterApiUrl } from '@solana/web3.js';
import './App.css'

function App() {

  

  return (
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/5Am7pqf4YZ-xdkRcxQ70B"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletConnectButton/>
                    <WalletDisconnectButton />
               <Airdrop/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
      </>  
  )
}

export default App
