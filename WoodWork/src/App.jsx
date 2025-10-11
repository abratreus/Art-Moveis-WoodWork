import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
