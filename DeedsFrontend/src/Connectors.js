import { Connectors } from "web3-react";
//import TrezorApi from "trezor-connect";
//import WalletConnectApi from "@walletconnect/web3-subprovider";
//import FortmaticApi from "fortmatic";



//Initializing functions to connect
const {
  //To inject web3 to any component from the app.
  InjectedConnector,
  NetworkOnlyConnector,
 
  
} = Connectors;

// Initializing the chains-networks we will use.
const supportedNetworkURLs = {
  1: "https://mainnet.infura.io/v3/",
  3: "https://ropsten.infura.io/v3/",
  4: "https://rinkeby.infura.io/v3/"
};

// const defaultNetwork = 1;

//Initializes which networks we will use.
const Metamask = new InjectedConnector({
  supportedNetworks: [3]
});

const Network = new NetworkOnlyConnector({
  providerURL: supportedNetworkURLs[3]
});
/*
const Trezor = new TrezorConnector({
  api: TrezorApi,
  supportedNetworkURLs,
  defaultNetwork,
  manifestEmail: "",
  manifestAppUrl: ""
});

const Ledger = new LedgerConnector({
  supportedNetworkURLs,
  defaultNetwork
});

const WalletConnect = new WalletConnectConnector({
  api: WalletConnectApi,
  bridge: "https://bridge.walletconnect.org",
  supportedNetworkURLs,
  defaultNetwork
});

const Fortmatic = new FortmaticConnector({
  api: FortmaticApi,
  apiKey: "",
  logoutOnDeactivation: false
});
*/


export default {
  Metamask,
  Network,
/*  Trezor,
  Ledger,
  WalletConnect,
  Fortmatic,*/

};
