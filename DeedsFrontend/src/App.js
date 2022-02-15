import React, { useState } from 'react';
import Web3Provider, { useWeb3Context } from "web3-react";
import connectors from "./Connectors.js";
import ActivateConnectors from "./components/ActivateConnectors.js";

function App() {


    return (
        //Allows us to grab the connectors for the whole app. As well as ethers.js
        <Web3Provider connectors={connectors} libraryName="ethers.js">
            <ActivateConnectors />
        </Web3Provider>
    )
}

export default App;
