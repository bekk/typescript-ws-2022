import './App.css';

import { ChakraProvider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading> </Heading>
      </div>
  </ChakraProvider>
  );
}

export default App;
