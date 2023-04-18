import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import FolderView from "./components/folder/FolderView"

function App() {
  return (
    <ChakraProvider>
      <FolderView />
    </ChakraProvider>
  )
}

export default App;
