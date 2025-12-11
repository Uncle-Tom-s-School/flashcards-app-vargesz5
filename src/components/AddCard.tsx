import React, { useState } from 'react'
import type { CardTpye } from '../App'

type Voids = {
    setWhich: React.Dispatch<React.SetStateAction<"Cards" | "Create">> 
    setData: CardTpye[]
}

const AddCard = ({setWhich, setData}: Voids) => {
    
    const[getQues, setQues] = useState<string>("")
    const[getAns, setAns] = useState<string>("")

    const sendData = () =>{
        let newList = {
            question: getQues,
            answer:getAns
        }
        setData.push(newList)
    }   

  return (
    <div>
        <div className='cardContainer'>
            <div className='addCardq'>
                <h3>Kérdés</h3>
                <textarea onChange={(event)=>setQues(event.target.value)} placeholder='Kérdés'/>
            </div>
            <div className='addCardA'>
                <h3>Válasz</h3>
                <textarea  onChange={(event)=>setAns(event.target.value)} placeholder='Válasz'/>
            </div>
        </div>
        <div>
                <button onClick={sendData} className='addNew'>Hozzáadás<i className="fa-solid fa-plus"></i></button>
            </div>
        <button onClick={() => setWhich("Cards")}>Vissza</button>
    </div>
  )
}

export default AddCard