import { useState } from 'react'
import './App.css'
import { Box, Button, Flex, Heading, Image, Text, ChakraProvider } from "@chakra-ui/react";
import NavBar from './navBar';

function App() {
 const [count, setCount] = useState(0)

  return (
    
    <>
    
    <div>
      <img src="/public/images/VidaBlack.png" alt="Vida Logo" />
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Edit <code>src/App.jsx</code> and save to test HMR updates.</p>
    </div>
    </>
    
    
  )
}

export default App