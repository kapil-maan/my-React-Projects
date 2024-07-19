import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
       <Card username="chai aur code" btntext="visit me"/>
       <Card username="kapil" btntext="click me"/>
    </>
  )
}

export default App
 