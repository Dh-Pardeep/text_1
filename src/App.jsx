import { useState } from 'react'
import './App.css'
import HeaderNav from './components/common/HeaderNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderNav/>
    </>
  )
}

export default App
