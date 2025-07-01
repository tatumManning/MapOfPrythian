import { useState } from 'react'
import map from './assets/map.png'
import './App.css'

function clickMe() {
  alert("BOOM");
}

function App() {
  

  return (
  
    <div>
      <h1>Map of Acotar</h1>
      <div>
        <img src={map} alt="map" />

      </div>
      <button onClick={clickMe}>DON'T PRESS</button>
    </div>
  
    

  );
}

export default App
