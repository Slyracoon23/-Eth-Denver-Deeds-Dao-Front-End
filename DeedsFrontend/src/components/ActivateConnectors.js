import React, { useState } from 'react';
import connectors from "../Connectors.js";
import { useWeb3Context } from "web3-react";
import { ethers } from 'ethers'
import Button from 'react-bootstrap/Button';

//Initializes the web3 context to use it for properties on the app.s
function ActivateConnectors(props) {
  const context = useWeb3Context();
  const [transactionHash, setTransactionHash] = React.useState()
  
  
  //context for transactions and mock transactions
  function sendTransaction() {
     const signer = context.library.getSigner();
        //adds the context for sending and receiving to 0x addresses
     signer.sendTransaction({
        to: ethers.constants.AddressZero,
        value: ethers.utils.bigNumberify('0')
     })
     //hashes for setting the transaction.
      .then(({ hash }) => {
        setTransactionHash(hash)
      });
    }

  console.log(Object.keys(connectors));
  if (context.error) {
    console.error("Error!");
  }
  else {
  return (
    //Basic fragment for first page.
    /**We set context for the functions-actions to be able to:
     * -Connect to the networks
     * -Use the wallets (Metamask)
     * -state management.
     */
    <React.Fragment>
      <h2>Deeds Template</h2>
      <p>Connect</p>
     
      <div>
        {!context.active && (
          //<Button as={Col} variant="primary">Metamask</Button>
        <Button as={Col} variant="success" onClick={() => context.setConnector('Metamask')}>
            Metamask
        </Button>)}
      </div>
      {context.active && (
        <button onClick={() => context.unsetConnector()}>
          Reset Web3 Connector
          </button>
      )}
      {context.active && (
        <p>Connected with {context.connectorName} on {context.networkId}!</p>
      )}
      {context.active && context.account && (
          <p>Connected account is: {context.account}</p>
      )}
      {context.error && <p>Something went wrong.  Please try connecting again.</p>}
      {context.active && context.account && (
        //For testing
        <button onClick={sendTransaction}>
          
          Send Dummy Transaction
        </button>
      )}
      {transactionHash && <p>{transactionHash}</p>}
    </React.Fragment>
  );
  }
  
}   

export default ActivateConnectors;
