import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Names from './components/Names'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Names name="Section 1"/>
    <Names name="Section 2"/>
    <Names name="Section 3"/>
    <Names name="Section 4"/>
    </>
  )
}

export default App
