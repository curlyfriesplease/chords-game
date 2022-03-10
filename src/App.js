import logo from "./logo.svg";
import "./App.css";
import "./Piano.css";
import { newChord } from "./js/onclick";
import { newPiano } from "./js/piano.js";
import React, { useEffect, useState, Component } from "react";

function App() {
  let piano;

  useEffect(() => {
    piano = newPiano();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="pianoContainer"></div>
      <button id="newChordButton" onClick={() => newChord(piano)}>
        Pick a new chord
      </button>
    </div>
  );
}

//export const piano = newPiano()

export default App;
