import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator =  useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&**()_+~"
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator()
  },[length, charAllowed , numberAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-4'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100}  className='cursor-pointer' value={length} onChange={(e)=> {setLength(e.target.value)}} />
        </div>
        <label>Length : {length}</label>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}/>
        </div>
        <label>Numbers</label>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}/>
        </div>
        <label>Characters</label>
      </div>
 
    </div>
  )
}

export default App
