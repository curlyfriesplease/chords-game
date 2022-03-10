import logo from './logo.svg';
import './App.css';
import { newChord } from './js/onclick';
import { newPiano } from './js/piano.js'
import React, { useEffect, useState, Component } from "react";


function App() {

let piano;

  useEffect(() => {
    piano = newPiano()
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <div id="pianoContainer">

        </div>
        <button id="newChordButton" onClick={() => newChord(piano)}>Pick a new chord</button>
      
      </header>
    </div>
  );
}

//export const piano = newPiano()

export default App;
