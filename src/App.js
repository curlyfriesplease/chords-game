import "./css/App.css";
import "./css/Buttons.scss";
import "./css/Header.css";
import "./css/Piano.css";
import chordsLogo from "./media/chords.png";

import { newChord } from "./js/onclick";
import { newPiano } from "./js/piano.js";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { AnswerButton } from "./js/buttons.js";

function App() {
  let piano;

  useEffect(() => {
    piano = newPiano();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span className="material-icons">home</span>
        <img src={chordsLogo} alt="Piano chord test" />
        <span className="material-icons">settings</span>
      </header>
      <div id="contentBody">
        <div id="pianoContainer"></div>
        <button id="newChordButton" onClick={() => newChord(piano)}>
          Pick a new chord
        </button>
        <br />
        <div id="answerButtonsContainer">
          <div id="answerButtonsFirstRow" className="buttonsRow">
            <div className="spacerBlock"></div>
            <AnswerButton chordName="C#" />
            <AnswerButton chordName="D#" />
            <div className="buttonBlock"></div>
            <AnswerButton chordName="F#" />
            <AnswerButton chordName="G#" />
            <AnswerButton chordName="A#" />
            <div className="spacerBlock"></div>
          </div>
          <div id="answerButtonsSecondRow" className="buttonsRow">
            <AnswerButton chordName="C" />
            <AnswerButton chordName="D" />
            <AnswerButton chordName="E" />
            <AnswerButton chordName="F" />
            <AnswerButton chordName="G" />
            <AnswerButton chordName="A" />
            <AnswerButton chordName="B" />
          </div>
        </div>
      </div>
    </div>
  );
}

//export const piano = newPiano()

export default App;
