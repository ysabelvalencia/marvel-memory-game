import { useState } from 'react';
import '@styles/App.scss';
import SingleCard from './SingleCard';
import { useEffect } from 'react';


const cardImages = [

  {"src": "src/images/hulk.jpg"},
  {"src": "src/images/ant-man.jpg"},
  {"src": "src/images/ironman.jpg"},
  {"src": "src/images/black-widow.jpg"},
  {"src": "src/images/capitan-america.jpg"},
  {"src": "src/images/spiderman.jpg"}
 ]

function App() {

  //2. Crear variable de estado para actualizar las cards y para los turnos.

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //1.Duplicar, ordenar aleatoriamente y dejar turnos a 0

  const shuffleCards = () => {
     
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {

    if (choiceOne && choiceTwo) {
      
      if (choiceOne.src === choiceTwo.src) {
        console.log('Those cards match')
        resetTurn()
      } else {
        console.log('Those cards do not match')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])


  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

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
          handleChoice={handleChoice}/>
        ))}

      </div>
    </div>
  );
}

export default App
