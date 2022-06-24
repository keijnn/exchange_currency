//import modules
import { useEffect, useState } from "react"

//import components
import { Exchange } from "./components/exchange/Exchange"
import { Header } from "./components/header/Header"

//import css files
import "./App.css"


export const App = () => {

  const [json, setJson] = useState({
    data: [],
    loading: true,
    error: null
  })
  
  const [currency, setCurrency] = useState()



  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json())
      .then(data => {
        setJson({data, loading: false})
        setCurrency(json.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  if (json.loading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Header 
        currency = { currency }
      />
      <Exchange
        currency = { currency }
      />
    </div>
  )
}
