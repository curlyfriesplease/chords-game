import logo from "./logo.svg";

import "./css/App.css";
import "./css/Buttons.css";
import "./css/Header.css";
import "./css/Piano.css";
import chordsLogo from "./media/chords.png"

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
      <header className="App-header">
        <span class="material-icons">home</span>
        <img src={chordsLogo} alt="Piano chord test" />
        <span class="material-icons">settings</span>
      </header>
      <div id="contentBody">
        <div id="pianoContainer"></div>
        <button id="newChordButton" onClick={() => newChord(piano)}>
          Pick a new chord
        </button>
        <div id="answerButtonsContainer"></div>
      </div>
    </div>
  );
}

//export const piano = newPiano()

export default App;
