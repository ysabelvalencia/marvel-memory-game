import { useState } from 'react';
import '@styles/App.scss';


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


  //1.Duplicar, ordenar aleatoriamente y dejar turnos a 0

  const shuffleCards = () => {
     
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Marvel Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

    {/* 3.Crear grid con la imagen de back y front */}

      <div className='card-grid'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt="Front image" />
              <img className='back' src="src\images\spider_black.jpg" alt="Back image" />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App
