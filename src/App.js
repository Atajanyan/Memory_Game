import './App.css'
import {useState,useEffect} from 'react'
import AllCards ,{AllSecondCards}from './data'
import Card from './components/card'


function App() {
  const [arrayCards, setArrayCards] = useState([])
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [isWon, setIsWon] = useState(false)
  const [moves, setMoves] = useState(0)
  const [wrongMoves, setWrongMoves] = useState(0)
  const [isOpen,setIsOpen] = useState(false)
  const [nextStage,setNextStage] = useState(false)


  const shuffls = () => { 
    let stage = [] 
    if(!nextStage){
      stage = AllCards
    }else{
      stage = AllSecondCards
    }  
    setArrayCards(stage.sort(() => Math.random() - 0.5)
    .map(card => ({...card, id: Math.random() })))
    setMoves(0)
    setWrongMoves(0)
    setFirstChoice(null)
    setSecondChoice(null)
    setIsWon(false)
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
    }, nextStage?3000:1000);
    stage.forEach(e=>e.status = false)
  }

  useEffect(()=>{
    shuffls()
  },[])

  useEffect(()=>{
    shuffls()
  },[nextStage])

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
      }else{setTimeout(() => {
        setWrongMoves(prev=>prev+1)
      }, 1000);} 
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

  const handleClick = () => {
    shuffls()
    setNextStage(false)
  }

  return (
    <div className='App'>
    <h1>Memory Game</h1>
    <div className='moves'>
    <p>Maximum count of wrong moves {nextStage?'of the second stage 15':'of the first stage 10'}</p>
     <div className='MovesRestart'>
      <p>Moves: {moves}</p>
       <p>Wrong Moves: {wrongMoves}</p>
       <button onClick={handleClick}>Restart Game</button>
     </div>
    </div>
{ 
isWon||(nextStage?wrongMoves===15:wrongMoves===10) ? 
<div className='won'>
    {
    isWon?<div>
      <h1>Congrats! You won{!nextStage? ' first stage ':''} with {moves} moves.</h1>
      <h1>Wrong Moves: {wrongMoves}</h1>
      {!nextStage?<div className='nextStage'>
        <h2>Go to next stage</h2>
        <button onClick={()=>setNextStage(true)}>next</button>
        </div>:<h1>You Won</h1>}
    </div>:
    <h1>You lose, restart game</h1> 
    }
    </div>
:
<div className="wrapper">
   <div className={nextStage?'next':'card-grid'}> 
      {arrayCards?.map(card =><Card  
      key={card.id} 
      card={card} 
      handleChoice={handleChoice}
      open={isOpen}
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