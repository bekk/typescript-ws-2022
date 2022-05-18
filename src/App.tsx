import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
import LunchForm from './oppgave-2/LunchForm';
import { Heading } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading>Lunsjbestilling Skuret</Heading>
        <header className="App-header">
         <LunchForm/>
        </header>
      </div>
  </ChakraProvider>
  );
}

export default App;
