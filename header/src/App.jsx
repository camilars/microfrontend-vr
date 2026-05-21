import { useState } from 'react'
import Header from './Header'
import "./Header.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
