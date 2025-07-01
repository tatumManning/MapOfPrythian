import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function clickMe() {
  alert("BOOM");
}

function App() {
  

  return <button onClick={clickMe}>DON'T PRESS</button>
}

export default App
