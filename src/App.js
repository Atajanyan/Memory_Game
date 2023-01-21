
import './App.css'
import {useState,useEffect} from 'react'
import AllCards from './data'
import Card from './components/card'



function App() {
  const [arrayCards, setArrayCards] = useState([])
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [isWon, setIsWon] = useState(false)
  const [moves, setMoves] = useState(0)


  const shuffls = () => {    
    setArrayCards(AllCards.sort(() => Math.random() - 0.5)
    .map(card => ({...card, id: Math.random() })))
    setMoves(0)
    setFirstChoice(null)
    setSecondChoice(null)
    setIsWon(false)
    arrayCards.forEach(e=>e.status = false)
  }

  useEffect(()=>{
    shuffls()
  },[])

  useEffect(() => {
    let didWin = false
    for(let card of arrayCards) {
      if(card.status) {
        didWin = true
      } else {
        didWin = false;
        break;
      }
    }
    if(didWin) {
     setTimeout(() => {
      setIsWon(true)
     },1000) 
    }
  }, [arrayCards])


  useEffect(() => {
    if(firstChoice && secondChoice) {
      setDisabled(true)
      if(firstChoice.image === secondChoice.image) {
        setArrayCards(prev => prev.map(card => {
          if(card.image === firstChoice.image) {
            card.status = true
          }
          return card;
        }))
      } 
     setTimeout(resetMoves, 1000) 
    }
  }, [firstChoice, secondChoice])


  const handleChoice = (card) => {
    if(card.id !== firstChoice?.id) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card)
    }
  }

  const resetMoves = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setMoves(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className='App'>
    <h1>Memory Game</h1>
    <div className='MovesRestart'>
       <p>Moves: {moves}</p>
       <button onClick={shuffls}>Restart Game</button>
    </div>
{ 
isWon ? 
<div className='won'><h1>Congrats! You won with {moves} turns.</h1></div> 
:
<div className="wrapper">
   <div className='card-grid'> 
      {arrayCards?.map(card =><Card  
      key={card.id} 
      card={card} 
      handleChoice={handleChoice}
      flipped={card === firstChoice || card === secondChoice || card.status}
      disabled={disabled}
       /> )}
   </div>
</div>
}
  </div>
  )
}

export default App