import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import { GetData } from './service/jsonprovider'
import AddCard from './components/AddCard'

export type CardTpye = {
  question: string
  answer: string
}

const App = () => {
  const [data, setData] = useState<CardTpye[]>([])
  const[which, setWhich] = useState<"Cards" | "Create">("Cards")


  useEffect(() => {
    GetData().then(res => setData(res))
  }, []) 

  return (
    <div className="container">
      {which == "Cards" && data.length > 0 && <Cards items={data} setWhich={setWhich} />}
      {which == "Create" && <AddCard setWhich={setWhich} setData={setData}/>}
    </div>
  )
}

export default App
