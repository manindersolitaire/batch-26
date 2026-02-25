import React from 'react'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
  const[amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options =  Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div>
      
    </div>
  )
}

export default App
