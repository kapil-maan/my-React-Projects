import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter , setCounter] = useState(1) // hook
  function add(){
    setCounter(counter+1);
     
  
  }
  function sub(){
    if(counter>0){
    setCounter(counter-1);}
     
  }
   
  return (
    <>
      <h1>hello</h1> 
      <h2>value:- {counter} </h2>

      <button onClick={add}>+ value</button>
      <br />
      <button onClick={sub}>- value</button>
    </>
  )
}

export default App
