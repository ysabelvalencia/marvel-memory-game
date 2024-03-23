import React from 'react'

export default function SingleCard({ card,
handleChoice }){

  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <div className='card'>
            <div>
              <img className='front' src={card.src} alt="Front image" />
              <img 
              className='back' src="src\images\spider_black.jpg" 
              alt="Back image"
              onClick={handleClick} />
            </div>
    </div>
  )
}
