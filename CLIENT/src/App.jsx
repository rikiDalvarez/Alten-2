import { useState } from 'react'
import Header from "./components/Header"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      Hello world
    </div>
  )
}

export default App
