import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

function App() {

  const supportedChainIds = [4];

  const connectors = {
    injected: {},
  };

  return (
    
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <div>
        <Header />
        <Home/>
      </div>
    </ThirdwebWeb3Provider>
      
    
        
  );
}

export default App;
