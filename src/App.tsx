import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import Hvem from './oppgave-2/Oppgave2';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading>Lunsjbestilling Skuret</Heading>
        <header className="App-header">
         <Hvem/>
        </header>
      </div>
  </ChakraProvider>
  );
}

export default App;
