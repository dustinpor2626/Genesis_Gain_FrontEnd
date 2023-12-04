import React, { useState } from "react";
import { ethers } from "ethers";
import Web3modal from "web3modal";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import bgvideo from "./asset/bgvideo.mp4";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Main from "./component/Main";

const providerOptions = {
  coinbasewalllet: {
    package: CoinbaseWalletSDK,
    Option: {
      appName: "GenesisGain",
      infuraId: {},
    },
  },
};

function App() {
  const [web3Provider, setWeb3Provider] = useState(null);

  async function connectWallet() {
    try {
      // console.log("Connecting wallet...");
      let web3modal = new Web3modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3modalInstance = await web3modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      setWeb3Provider(web3modalProvider);
      // console.log("web3Provider set:", web3Provider);
      // console.log(web3modalProvider);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <div className="home">
        <video src={bgvideo} autoPlay loop muted />

        <div className="content">
          <h1>G E N E S I S G A I N</h1>
        </div>

        <Routes>
          <Route path="/Main" element={<Main />} />
        </Routes>

        <button
          className="top-right-button"
          onClick={() => (web3Provider ? undefined : connectWallet())}
        >
          {web3Provider ? (
            <Link to="/Main">{`Address: ${web3Provider.provider.selectedAddress}`}</Link>
          ) : (
            "Connect Wallet"
          )}
        </button>
      </div>
    </Router>
  );
}

export default App;
