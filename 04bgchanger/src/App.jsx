import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
  <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
           onClick={()=>setColor("red")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"red"}}
           >red</button>
           <button 
           onClick={()=>setColor("green")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"green"}}
           >green</button>
           <button 
           onClick={()=>setColor("blue")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"blue"}}
           >blue</button>
           <button 
           onClick={()=>setColor("yellow")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"yellow"}}
           >yellow</button>
           <button 
           onClick={()=>setColor("orange")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"orange"}}
           >orange</button>
           <button 
           onClick={()=>setColor("pink")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"pink"}}
           >pink</button>
           <button 
           onClick={()=>setColor("gray")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"gray"}}
           >gray</button>
           <button 
           onClick={()=>setColor("lavender")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"lavender"}}
           >lavender</button>
           <button 
           onClick={()=>setColor("purple")}
           className="outline-none px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"purple"}}
           >purple</button>
           <button 
           onClick={()=>setColor("white")}
           className="outline-4 px-4 py-1
           rounded-lg" 
           style={{backgroundColor:"white"}}
           >white</button>
           <button 
           onClick={()=>setColor("black")}
           className="outline-none px-4 py-1
           rounded-lg text-white" 
           style={{backgroundColor:"black"}}
           >black</button>
           <button 
           onClick={()=>setColor("indigo")}
           className="outline-none px-4 py-1
           rounded-lg text-white" 
           style={{backgroundColor:"indigo"}}
           >indigo</button>
        </div>
      </div>
  </div>   
       
  
  )
}

export default App
