import { useState } from 'react';
import '@styles/App.scss';
import SingleCard from './SingleCard';
import { useEffect } from 'react';


const cardImages = [

  {"src": "src/images/hulk.jpg", matched: false },
  {"src": "src/images/ant-man.jpg", matched: false },
  {"src": "src/images/ironman.jpg", matched: false },
  {"src": "src/images/black-widow.jpg", matched: false },
  {"src": "src/images/capitan-america.jpg", matched: false },
  {"src": "src/images/spiderman.jpg", matched: false }
 ]

function App() {

  //2. Crear variable de estado para actualizar las cards y para los turnos.

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  //1.Duplicar, ordenar aleatoriamente y dejar turnos a 0

  const shuffleCards = () => {
     
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {

    if (choiceOne && choiceTwo) {

      setDisabled(true)
      
      if (choiceOne.src === choiceTwo.src) {
        
        setCards(prevCards => {
          return prevCards.map (card => {
            if (card.src === choiceOne.src) {
              return {...card, matched:true}
            } else {
              return card
            }
          })
        })
        console.log('Those cards match')
        resetTurn()
      } else {
        console.log('Those cards do not match')
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])


  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  console.log (cards, turns)


  //starts a new game
  useEffect(() => {
    shuffleCards()
  }, []);

  return (
    <div className="App">
      <h1>Marvel Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

    {/* 3.Crear grid */}

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}
      </div>
          <p>Turns: {turns}</p>
    </div>
  );
}

export default App
