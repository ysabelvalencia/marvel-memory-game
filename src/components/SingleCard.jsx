import React from 'react'
import '@styles/SingleCard.scss'

export default function SingleCard({ card,
handleChoice,
flipped,
disabled }){

  const handleClick = () => {
    
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div className='card'>
            <div className={flipped? "flipped" : ""}>
              <img className='front' src={card.src} alt="Front image" />
              <img 
              className='back' src="src\images\spider_black.jpg" 
              alt="Back image"
              onClick={handleClick} />
            </div>
    </div>
  )
}
