import { useState } from 'react'
import Homepage from '../components/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Wardrobe Wonderland</h1>
      </div>
       <Homepage />
    </>
  )
}

export default App
