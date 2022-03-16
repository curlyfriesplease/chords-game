import "./css/App.css";
import "./css/Buttons.scss";
import "./css/Header.css";
import "./css/Piano.css";
import "./css/Feedback.css";
import chordsLogo from "./media/chords.png";

import { newChord } from "./js/onclick";
import { newPiano } from "./js/piano.js";
import React, { useEffect } from "react";
import { AnswerButton } from "./js/buttons.js";
import { Feedback } from "./js/feedback";

function App() {
  let piano;
//TODO pass back to this parent component from AnswerButton to call newChord
  useEffect(() => {
    piano = newPiano();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span
          className="material-icons"
          id="homeButton"
          onClick={() => newChord(piano)}
        >
          home
        </span>
        <img src={chordsLogo} alt="Piano chord test" />
        <span className="material-icons">settings</span>
      </header>
      <div id="contentBody">
        <div id="pianoContainer"></div>
        <br />
        <Feedback />
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
          <br />
          <div
            id="answerButtonsThirdRow"
            className="buttonsRow minorKeyButtons"
          >
            <div className="spacerBlock"></div>
            <AnswerButton chordName="C#m" />
            <AnswerButton chordName="D#m" />
            <div className="buttonBlock"></div>
            <AnswerButton chordName="F#m" />
            <AnswerButton chordName="G#m" />
            <AnswerButton chordName="A#m" />
            <div className="spacerBlock"></div>
          </div>
          <div
            id="answerButtonsFourthRow"
            className="buttonsRow minorKeyButtons"
          >
            <AnswerButton chordName="Cm" />
            <AnswerButton chordName="Dm" />
            <AnswerButton chordName="Em" />
            <AnswerButton chordName="Fm" />
            <AnswerButton chordName="Gm" />
            <AnswerButton chordName="Am" />
            <AnswerButton chordName="Bm" />
          </div>
        </div>
      </div>
    </div>
  );
}

//export const piano = newPiano()

export default App;

{
  /* <script>$("#homeButton" ).click(function() {
  alert( "Handler for .click() called." );
  newChord(piano)
});</script> */
}
