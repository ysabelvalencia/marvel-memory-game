import { useState } from 'react';
import '@styles/App.scss';


function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Marvel Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}

export default App
