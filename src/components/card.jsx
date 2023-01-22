
import React from 'react'
import question from '../assets/question.png'


function Card({ card, handleChoice, flipped, disabled,open }) {
  const handleClick = () => {
    if(!disabled) handleChoice(card) 
}
  return (
    <div className='card' >
    <div className={flipped||open ? 'flipped' : ''} >
    <img className='front' src={card.image} alt="" />
    <img 
    className='back' 
    src={question} 
    onClick={handleClick}
    alt=""/>
    </div>
        
</div>
  )
}

export default Card