import React, { useState } from 'react'
import type { CardTpye } from '../App'

type Prop = {
  items: CardTpye[]
  setWhich: React.Dispatch<React.SetStateAction<"Cards" | "Create">>
}


const Cards = ( {items, setWhich}: Prop) => {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const getCurrent = () => {
    setFlipped(false) 
    if (index < items.length - 1) {
      setIndex(prev => prev + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <>
      <div className="flip-card" onClick={() => setFlipped(!flipped)}>
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            <h1>Kérdés</h1>
            <h2>{items[index].question}</h2>
          </div>
          <div className="flip-card-back">
            <h1>Válasz</h1>
            <h2>{items[index].answer}</h2>
            <div>
              <button onClick={getCurrent} className="btn">
                Eltaláltam <i className="fa-regular fa-circle-check"></i>
              </button>
              <button onClick={getCurrent} className="btn">
                Nem Sikerült <i className="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          </div>
        </div>
        <p>{index}/{items.length}</p>
      </div>
      <progress value={index} max={items.length} />
      <button onClick={() => setWhich("Create")}>Új kártya létrehozása</button>
    </>
  )
}

export default Cards
