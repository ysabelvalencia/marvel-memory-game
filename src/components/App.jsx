import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../styles/App.scss';
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Hola mundo</h1>
    </div>
    </>
  )
}

export default App
